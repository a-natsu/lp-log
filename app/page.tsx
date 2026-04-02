"use client";

import { useState } from "react";

import { logs } from "./data/logs";

import { LogCard } from "./components/LogCard";

export default function Home(){
  return (
           <main>
             <h1>LP改善ログ</h1>
             <p>フロントエンド（UI）職への転職に向けて、Next.jsでポートフォリオを制作中です。</p>
             <ul>

{logs.map((log) => (
    <LogCard key={log.id} log={log} />
))}

</ul>
             </main>
  );
 }