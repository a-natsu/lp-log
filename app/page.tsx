"use client";

import { useState } from "react";

import { logs } from "./data/logs";

import { LogCard } from "./components/LogCard";

export default function Home(){

// 1. 今どのボタン（ステータス）が選ばれているかを覚えるメモ帳
const [selectedStatus, setSelectedStatus] = useState<string | null>(null);

// 2. そのメモ帳の内容を見て、表示するデータを絞り込む
const filteredLogs = selectedStatus 
  ? logs.filter((log) => log.status === selectedStatus) 
  : logs;

  return (
           <main className="max-w-2xl mx-auto p-6 md:p-12">
             <h1>LP改善ログ</h1>
             <p>フロントエンド（UI）職への転職に向けて、Next.jsでポートフォリオを制作中です。</p>

<div className="mt-4 flex flex-wrap gap-2">
  {/* 「全部」ボタン */}
  <button 
    onClick={() => setSelectedStatus(null)} 
    className={`rounded-full border px-3 py-1 text-sm ${selectedStatus === null ? "bg-gray-900 text-white" : "bg-white"}`}
  >
    全部
  </button>

  {/* 「完了・検証・実装」ボタンを自動で作る */}
  {["完了", "検証", "実装"].map((s) => (
    <button 
      key={s} 
      onClick={() => setSelectedStatus(s)} 
      className={`rounded-full border px-3 py-1 text-sm ${selectedStatus === s ? "bg-gray-900 text-white" : "bg-white"}`}
    >
      {s}
    </button>
  ))}
</div>

<ul className="mt-4 space-y-3">
  {filteredLogs.map((log) => (
    <LogCard key={log.id} log={log} />
  ))}
</ul>
             </main>
  );
 }