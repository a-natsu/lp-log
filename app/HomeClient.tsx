"use client";

import { useRouter, useSearchParams } from "next/navigation";

import { logs } from "./data/logs";

import { LogCard } from "./components/LogCard";

import Link from "next/link";

export default function HomeClient() {
  const router = useRouter();

  const searchParams = useSearchParams();
  const allowedStatuses = ["完了", "検証", "実装"] as const;

  const statusParam = searchParams.get("status");
  const selectedStatus = allowedStatuses.includes(statusParam as any)
    ? statusParam
    : null;

  const filteredLogs = selectedStatus
    ? logs.filter((log) => log.status === selectedStatus)
    : logs;

  return (
    <main className="max-w-2xl mx-auto p-6 md:p-12 text-center">
      <h1 className="text-xl font-bold">LP改善ログ</h1>
      <p className="mt-2 text-sm text-gray-600 max-w-xl mx-auto">
        フロントエンド（UI）職への転職に向けて、Next.jsでポートフォリオを制作中です。
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {/* 「全部」ボタン */}
        <button
          onClick={() => router.replace("/")}
          className={`rounded-full border px-3 py-1 text-sm ${selectedStatus === null ? "bg-gray-900 text-white" : "bg-white"}`}
        >
          全部
        </button>

        {/* 「完了・検証・実装」ボタンを自動で作る */}
        {["完了", "検証", "実装"].map((s) => (
          <button
            key={s}
            onClick={() => router.replace(`/?status=${encodeURIComponent(s)}`)}
            className={`rounded-full border px-3 py-1 text-sm ${selectedStatus === s ? "bg-gray-900 text-white" : "bg-white"}`}
          >
            {s}
          </button>
        ))}
      </div>

      {filteredLogs.length === 0 ? (
        /* 1. ログが0件の時の表示 */
        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-100 p-6 text-gray-900">
          <p className="font-medium">該当するログがありません</p>
          <p className="mt-1 text-sm text-gray-500">
            フィルタ条件を変えてみてください。
          </p>
          <Link
            href="/"
            className="mt-4 inline-flex items-center rounded-full bg-gray-900 text-white px-4 py-2 text-sm "
          >
            全部に戻す
          </Link>
        </div>
      ) : (
        /* 2. ログがある時の表示 */
        <ul className="mt-4 space-y-3">
          {filteredLogs.map((log) => (
            <LogCard key={log.id} log={log} />
          ))}
        </ul>
      )}
    </main>
  );
}
