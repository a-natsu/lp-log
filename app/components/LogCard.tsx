"use client";
import Link from "next/link";

import type { Log } from "../types/log";

function statusBadgeClass(status: string) {
  switch (status) {
    case "完了":
      return "bg-green-50 text-green-700 ring-1 ring-inset ring-green-200";
    case "検証":
      return "bg-blue-50 text-blue-700 ring-1 ring-inset ring-blue-200";
    case "実装":
      return "bg-amber-50 text-amber-800 ring-1 ring-inset ring-amber-200";
    default:
     return "bg-red-500 text-white";
  }
}

// コンポーネント本体
export function LogCard({ log }: { log: Log }) {
  return (
    <li onTouchStart={() => {}}>
      <Link 
        href={`/logs/${log.id}`} 
        className="block rounded-xl border border-gray-200 bg-white p-4 transition duration-200 hover:shadow-lg hover:border-gray-300 hover:bg-gray-50 active:scale-[0.98] active:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
      >
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-base font-semibold text-gray-900">{log.title}</h2>
        <span className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusBadgeClass(log.status)}`}>
    {log.status}
</span>
        </div>
        
        <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-xs text-gray-500">
          <span>{log.lp}</span>
          <span>{log.date}</span>
        </div>
        
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xs text-gray-500">KPI</span>
          <span className="text-sm font-medium text-gray-900">{log.kpi}</span>
        </div>
      </Link>
    </li>
  );
}