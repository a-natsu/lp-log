"use client";
import Link from "next/link";

import type { Log } from "../types/log";

import { statusBadgeClass } from "./statusBadgeClass";

// コンポーネント本体
export function LogCard({ log }: { log: Log }) {
  return (
    <li onTouchStart={() => {}}>
      <Link
        href={`/logs/${log.id}`}
        className="block rounded-xl border border-gray-200 bg-gray-100 p-4 transition duration-200 hover:shadow-lg hover:border-gray-300 hover:bg-gray-200 active:scale-[0.98] active:bg-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-300"
      >
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-base font-semibold text-gray-900">{log.title}</h2>
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusBadgeClass(log.status)}`}
          >
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
