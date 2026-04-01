// app/data/logs.ts
import type { Log } from "../types/log";

export const logs: Log[]
 = [
  { id: "1", title: "フォーム項目削減", lp: "無料相談LP", date: "2026-03-10", kpi: "CVR", status: "完了",body: "フォーム項目を減らしてCVR改善を狙った。まずは必須だけに絞った。" },
  { id: "2", title: "FV訴求の具体化", lp: "資料請求LP", date: "2026-03-14", kpi: "スクロール率", status: "検証",body: "フォーム項目を減らしてCVR改善を狙った。まずは必須だけに絞った。" },
  { id: "3", title: "FAQ追加", lp: "オンライン相談LP", date: "2026-03-18", kpi: "離脱率", status: "実装",body: "フォーム項目を減らしてCVR改善を狙った。まずは必須だけに絞った。" },
];