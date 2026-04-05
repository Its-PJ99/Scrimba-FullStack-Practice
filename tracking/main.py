import time
import json
import os
from github_compare import scan_module
from config         import MODULES


def run():
    print("=" * 55)
    print("🚀  SCRIMBA PROGRESS TRACKER")
    print("=" * 55)

    all_results = []

    for module in MODULES:
        results = scan_module(module)
        all_results.extend(results)
        time.sleep(0.3)

    # Terminal summary
    done    = sum(1 for r in all_results if r["status"] == "✅ Done")
    new     = sum(1 for r in all_results if r["status"] == "🆕 New")
    pending = sum(1 for r in all_results if r["status"] == "❌ Pending")
    skip    = sum(1 for r in all_results if r["status"] == "⚪ Skip")
    total   = len(all_results)
    pct     = round((done + new) / total * 100) if total else 0

    print("\n" + "=" * 55)
    print("📊 SCRIMBA PROGRESS TRACKER — SUMMARY")
    print("=" * 55)
    print(f"✅ Done    : {done}")
    print(f"🆕 New     : {new}")
    print(f"❌ Pending : {pending}")
    print(f"⚪ Skip    : {skip}")
    print(f"📈 Progress: {pct}%")
    print(f"📚 Total   : {total} lessons")
    print("=" * 55)

    # results.json save karo
    results_path = os.path.join(os.path.dirname(__file__), "results.json")
    with open(results_path, "w", encoding="utf-8") as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)
    print(f"\n💾 results.json saved → {results_path}")
    print("🎉 Done! AppScript Google Sheet update karega.")


if __name__ == "__main__":
    run()
