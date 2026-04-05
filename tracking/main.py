import time
import json
import os
from github_compare import scan_module
from sheet_updater  import update_sheet, get_summary
from config         import MODULES


def run():
    print("=" * 45)
    print("🚀  SCRIMBA PROGRESS TRACKER")
    print("=" * 45)

    all_results = []

    for module in MODULES:
        results = scan_module(module)
        all_results.extend(results)
        time.sleep(0.3)  # GitHub API rate limit avoid

    # Terminal summary
    get_summary(all_results)

    # results.json save karo (GitHub Action isko push karega)
    results_path = os.path.join(os.path.dirname(__file__), "results.json")
    with open(results_path, "w", encoding="utf-8") as f:
        json.dump(all_results, f, ensure_ascii=False, indent=2)
    print(f"\n💾 results.json saved → {results_path}")
    print("\n🎉 Done! AppScript Google Sheet update karega.")
    print(f"   https://docs.google.com/spreadsheets/d/1BOemYV1b3a-ih5BMQFTHdfAYcdceBYhYT0QmFDw9RIk")


if __name__ == "__main__":
    run()
