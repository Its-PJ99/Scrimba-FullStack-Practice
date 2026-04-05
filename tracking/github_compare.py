import requests
import os
from config import YOUR_REPO, SCRIMBA_REPO, COMPARE_FILES

# GitHub Token — Actions mein automatically milta hai
TOKEN   = os.environ.get("GITHUB_TOKEN", "")
HEADERS = {"Authorization": f"token {TOKEN}"} if TOKEN else {}
BASE    = "https://api.github.com/repos"


def get_folder_contents(repo, path):
    """Folder ke andar ki files/folders lo"""
    url      = f"{BASE}/{repo}/contents/{requests.utils.quote(path, safe='/')}"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    return []


def get_file_sha(repo, filepath):
    """Ek file ka SHA lo"""
    url      = f"{BASE}/{repo}/contents/{requests.utils.quote(filepath, safe='/')}"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json().get("sha")
    return None


def find_compare_file(repo, lesson_path):
    """
    Lesson folder mein compare file dhundho
    Priority: index.html > index.js > styles.css
    """
    contents = get_folder_contents(repo, lesson_path)
    file_names = [f["name"] for f in contents if f["type"] == "file"]

    for compare_file in COMPARE_FILES:
        if compare_file in file_names:
            return f"{lesson_path}/{compare_file}", compare_file

    return None, None


def compare_lesson(module_path, lesson_name):
    """
    Ek lesson compare karo:
    SHA same   → ❌ Pending (tune change nahi kiya)
    SHA different → ✅ Done  (tune kuch kiya!)
    """
    lesson_path = f"{module_path}/{lesson_name}"

    # Compare file dhundho
    your_filepath, file_name = find_compare_file(YOUR_REPO, lesson_path)
    if not your_filepath:
        return {
            "module"  : module_path,
            "lesson"  : lesson_name,
            "file"    : "No file",
            "status"  : "⚪ Skip",
            "changed" : False,
            "your_sha": "",
            "orig_sha": "",
        }

    scrimba_filepath = your_filepath  # Same path dono repos mein

    your_sha   = get_file_sha(YOUR_REPO, your_filepath)
    scrimba_sha = get_file_sha(SCRIMBA_REPO, scrimba_filepath)

    # Dono exist nahi → skip
    if not your_sha and not scrimba_sha:
        return {
            "module"  : module_path,
            "lesson"  : lesson_name,
            "file"    : file_name,
            "status"  : "⚪ Skip",
            "changed" : False,
            "your_sha": "",
            "orig_sha": "",
        }

    # Tera file hai, Scrimba ka nahi → New file banaya!
    if your_sha and not scrimba_sha:
        return {
            "module"  : module_path,
            "lesson"  : lesson_name,
            "file"    : file_name,
            "status"  : "🆕 New",
            "changed" : True,
            "your_sha": your_sha[:7],
            "orig_sha": "N/A",
        }

    changed = (your_sha != scrimba_sha)

    return {
        "module"  : module_path,
        "lesson"  : lesson_name,
        "file"    : file_name,
        "status"  : "✅ Done" if changed else "❌ Pending",
        "changed" : changed,
        "your_sha": your_sha[:7] if your_sha else "",
        "orig_sha": scrimba_sha[:7] if scrimba_sha else "",
    }


def scan_module(module_name):
    """Poore module ke sab lessons scan karo"""
    print(f"\n📁 {module_name}")
    print("-" * 50)

    results  = []
    contents = get_folder_contents(YOUR_REPO, module_name)

    # Sirf folders (lessons)
    lessons = [item for item in contents if item["type"] == "dir"]

    if not lessons:
        print("  ⚠️  No lessons found!")
        return results

    for item in lessons:
        lesson_name = item["name"]
        result      = compare_lesson(module_name, lesson_name)
        results.append(result)
        print(f"  {result['status']} — {lesson_name}")

    return results
