import gspread
import json
import os
from google.oauth2.service_account import Credentials
from datetime import datetime
from config import SHEET_ID, SHEET_NAME


def connect_sheet():
    """Google Sheet se connect karo"""

    # GitHub Actions mein secret se credentials lo
    creds_json = os.environ.get("GOOGLE_CREDS")

    if creds_json:
        # GitHub Actions: Secret se
        creds_dict = json.loads(creds_json)
        creds = Credentials.from_service_account_info(
            creds_dict,
            scopes=["https://www.googleapis.com/auth/spreadsheets"]
        )
    else:
        # Local testing: File se
        creds = Credentials.from_service_account_file(
            "service_account.json",
            scopes=["https://www.googleapis.com/auth/spreadsheets"]
        )

    client = gspread.authorize(creds)
    sheet  = client.open_by_key(SHEET_ID)

    # Worksheet dhundho ya banao
    try:
        ws = sheet.worksheet(SHEET_NAME)
    except gspread.WorksheetNotFound:
        ws = sheet.add_worksheet(SHEET_NAME, rows=500, cols=10)

    return ws


def update_sheet(all_results):
    """
    Sab results Google Sheet mein update karo

    Sheet structure:
    | # | Module | Lesson | File | Status | Your SHA | Original SHA | Last Updated |
    """
    print("\n📊 Connecting to Google Sheet...")
    ws = connect_sheet()

    # Headers set karo
    headers = [
        "#", "Module", "Lesson", "File",
        "Status", "Your SHA", "Original SHA", "Last Updated"
    ]
    ws.update("A1:H1", [headers])

    # Format headers — bold
    ws.format("A1:H1", {
        "textFormat": {"bold": True},
        "backgroundColor": {"red": 0.26, "green": 0.52, "blue": 0.96}
    })

    # Sab rows update karo
    rows = []
    for i, result in enumerate(all_results, start=1):
        rows.append([
            i,
            result.get("module", ""),
            result.get("lesson", ""),
            result.get("file", ""),
            result.get("status", ""),
            result.get("your_sha", ""),
            result.get("orig_sha", ""),
            datetime.now().strftime("%d-%b-%Y %H:%M"),
        ])

    if rows:
        end_row = len(rows) + 1
        ws.update(f"A2:H{end_row}", rows)

    # Summary row
    total   = len(all_results)
    done    = sum(1 for r in all_results if r.get("changed"))
    percent = round(done / total * 100) if total > 0 else 0

    summary_row = end_row + 2
    ws.update(f"A{summary_row}:H{summary_row}", [[
        "", "📊 SUMMARY",
        f"Total: {total}",
        f"Done: {done}",
        f"Progress: {percent}%",
        "", "",
        datetime.now().strftime("%d-%b-%Y %H:%M"),
    ]])

    print(f"✅ Sheet updated! {len(rows)} lessons tracked.")
    print(f"📈 Progress: {done}/{total} ({percent}%)")


def get_summary(all_results):
    """Terminal mein summary print karo"""
    total   = len(all_results)
    done    = sum(1 for r in all_results if r.get("changed"))
    pending = total - done
    percent = round(done / total * 100) if total > 0 else 0

    print("\n" + "=" * 45)
    print("📊  SCRIMBA PROGRESS TRACKER — SUMMARY")
    print("=" * 45)
    print(f"✅  Done     : {done}")
    print(f"❌  Pending  : {pending}")
    print(f"📈  Progress : {percent}%")
    print(f"📚  Total    : {total} lessons")
    print("=" * 45)
