import time
import json
import os
from github_compare import compare_lesson, scan_module, get_folder_contents
from config import MODULES, YOUR_REPO

RESULTS_PATH = os.path.join(os.path.dirname(__file__), "results.json")


def load_existing_results():
    """Pehle se saved results.json padho"""
    if os.path.exists(RESULTS_PATH):
        with open(RESULTS_PATH, "r", encoding="utf-8") as f:
            return json.load(f)
    return []


def save_results(results):
    """results.json save karo"""
    with open(RESULTS_PATH, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)
    print(f"\n💾 results.json saved ({len(results)} lessons)")


def parse_changed_files(changed_files_str):
    """
    Changed files string se module/section/lesson extract karo
    Example path: "02. HTML and CSS Fundamentals/01. Intro to HTML/01. HTML tags/index.html"
    Returns: list of (module, section, lesson) tuples
    """
    changed = []
    if not changed_files_str:
        return changed

    for filepath in changed_files_str.strip().split('\n'):
        filepath = filepath.strip()
        parts = filepath.split('/')

        # Minimum 4 parts chahiye: module/section/lesson/file.html
        if len(parts) >= 4:
            module  = parts[0]
            section = parts[1]
            lesson  = parts[2]
            # Sirf tracked modules ke files lo
            if module in MODULES:
                changed.append((module, section, lesson))

    # Duplicates remove karo
    return list(set(changed))


def update_result_in_list(results, new_result):
    """
    Existing results list mein ek result update karo
    Match: module + section + lesson
    """
    for i, r in enumerate(results):
        if (r.get("module")  == new_result["module"] and
            r.get("section") == new_result["section"] and
            r.get("lesson")  == new_result["lesson"]):
            results[i] = new_result
            return True
    # Nahi mila — nayi entry add karo
    results.append(new_result)
    return False


def print_summary(results):
    done    = sum(1 for r in results if r["status"] == "✅ Done")
    new     = sum(1 for r in results if r["status"] == "🆕 New")
    pending = sum(1 for r in results if r["status"] == "❌ Pending")
    skip    = sum(1 for r in results if r["status"] == "⚪ Skip")
    total   = len(results)
    pct     = round((done + new) / total * 100) if total else 0

    print("\n" + "=" * 55)
    print("📊 SCRIMBA PROGRESS SUMMARY")
    print("=" * 55)
    print(f"✅ Done    : {done}")
    print(f"🆕 New     : {new}")
    print(f"❌ Pending : {pending}")
    print(f"⚪ Skip    : {skip}")
    print(f"📈 Progress: {pct}%")
    print(f"📚 Total   : {total} lessons")
    print("=" * 55)


def run_full_scan():
    """Pehli baar — poora scan karo"""
    print("=" * 55)
    print("🔍 FULL SCAN MODE — Sab modules scan ho rahe hain")
    print("=" * 55)

    all_results = []
    for module in MODULES:
        results = scan_module(module)
        all_results.extend(results)
        time.sleep(0.3)

    print_summary(all_results)
    save_results(all_results)
    print("\n✅ Full scan complete! Ab har push pe sirf changed files track hongi.")


def run_incremental(changed_files_str):
    """Push pe — sirf changed files check karo"""
    changed = parse_changed_files(changed_files_str)

    if not changed:
        print("ℹ️  Koi trackable file nahi badi — tracking files ya workflows update hue.")
        print("   (results.json unchanged)")
        return

    print("=" * 55)
    print(f"⚡ INCREMENTAL MODE — {len(changed)} lesson(s) changed")
    print("=" * 55)

    # Existing results load karo
    results = load_existing_results()

    if not results:
        print("⚠️  results.json nahi mila! Pehle full scan karo.")
        print("   Abhi full scan chal raha hai...")
        run_full_scan()
        return

    # Sirf changed lessons check karo
    for module, section, lesson in changed:
        print(f"\n📝 Checking: {module} → {section} → {lesson}")
        result = compare_lesson(module, section, lesson)
        updated = update_result_in_list(results, result)
        action = "Updated" if updated else "Added"
        print(f"   {result['status']} — {lesson} [{action}]")

    print_summary(results)
    save_results(results)


def run():
    # Environment variable se changed files lo
    changed_files = os.environ.get("CHANGED_FILES", "").strip()

    # results.json exist karta hai? → incremental mode
    # Nahi hai? → full scan
    if changed_files and os.path.exists(RESULTS_PATH):
        run_incremental(changed_files)
    else:
        print("📋 results.json nahi mila ya pehla push — Full scan chal raha hai...")
        run_full_scan()


if __name__ == "__main__":
    run()
