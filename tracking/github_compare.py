import requests
import os
from config import YOUR_REPO, SCRIMBA_REPO, COMPARE_FILES

TOKEN   = os.environ.get("GITHUB_TOKEN", "")
HEADERS = {"Authorization": f"token {TOKEN}"} if TOKEN else {}
BASE    = "https://api.github.com/repos"


def get_folder_contents(repo, path):
    url      = f"{BASE}/{repo}/contents/{requests.utils.quote(path, safe='/')}"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json()
    return []


def get_file_sha(repo, filepath):
    url      = f"{BASE}/{repo}/contents/{requests.utils.quote(filepath, safe='/')}"
    response = requests.get(url, headers=HEADERS)
    if response.status_code == 200:
        return response.json().get("sha")
    return None


def find_compare_file(repo, lesson_path):
    """Lesson folder mein index.html / index.js / styles.css dhundho"""
    contents   = get_folder_contents(repo, lesson_path)
    file_names = [f["name"] for f in contents if f["type"] == "file"]
    for cf in COMPARE_FILES:
        if cf in file_names:
            return f"{lesson_path}/{cf}", cf
    return None, None


def compare_lesson(module_path, section_name, lesson_name):
    """
    Ek lesson compare karo (3 levels deep):
    Module / Section / Lesson / index.html
    """
    lesson_path = f"{module_path}/{section_name}/{lesson_name}"

    your_filepath, file_name = find_compare_file(YOUR_REPO, lesson_path)
    if not your_filepath:
        return {
            "module"  : module_path,
            "section" : section_name,
            "lesson"  : lesson_name,
            "file"    : "No file",
            "status"  : "⚪ Skip",
            "changed" : False,
            "your_sha": "",
            "orig_sha": "",
        }

    scrimba_filepath = your_filepath  # Same path dono repos mein

    your_sha    = get_file_sha(YOUR_REPO, your_filepath)
    scrimba_sha = get_file_sha(SCRIMBA_REPO, scrimba_filepath)

    if not your_sha and not scrimba_sha:
        return {
            "module"  : module_path,
            "section" : section_name,
            "lesson"  : lesson_name,
            "file"    : file_name,
            "status"  : "⚪ Skip",
            "changed" : False,
            "your_sha": "",
            "orig_sha": "",
        }

    if your_sha and not scrimba_sha:
        return {
            "module"  : module_path,
            "section" : section_name,
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
        "section" : section_name,
        "lesson"  : lesson_name,
        "file"    : file_name,
        "status"  : "✅ Done" if changed else "❌ Pending",
        "changed" : changed,
        "your_sha": your_sha[:7] if your_sha else "",
        "orig_sha": scrimba_sha[:7] if scrimba_sha else "",
    }


def scan_module(module_name):
    """
    Poore module ke saare sections aur unke lessons scan karo
    Structure: Module / Section / Lesson / index.html
    """
    print(f"\n📦 {module_name}")
    print("=" * 55)

    results  = []
    sections = get_folder_contents(YOUR_REPO, module_name)
    sections = [s for s in sections if s["type"] == "dir"]

    if not sections:
        print("  ⚠️  No sections found!")
        return results

    for section in sections:
        section_name = section["name"]
        print(f"\n  📁 {section_name}")
        print("  " + "-" * 45)

        lessons = get_folder_contents(YOUR_REPO, f"{module_name}/{section_name}")
        lessons = [l for l in lessons if l["type"] == "dir"]

        if not lessons:
            # Section ke andar directly files hain (flat structure)
            result = compare_lesson(module_name, section_name, "")
            # Flat structure handle karo
            result["lesson"] = section_name
            result["section"] = module_name
            results.append(result)
            print(f"    {result['status']} — {section_name}")
            continue

        for lesson in lessons:
            lesson_name = lesson["name"]
            result      = compare_lesson(module_name, section_name, lesson_name)
            results.append(result)
            print(f"    {result['status']} — {lesson_name}")

    return results
