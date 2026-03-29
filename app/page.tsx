import { LogCard } from "./components/LogCard";
const logs = [

{ id: "1", title: "フォーム項目削減", lp: "無料相談LP", date: "2026-03-10", kpi: "CVR", status: "完了" },

{ id: "2", title: "FV訴求の具体化", lp: "資料請求LP", date: "2026-03-14", kpi: "スクロール率", status: "検証" },

{ id: "3", title: "FAQ追加", lp: "オンライン相談LP", date: "2026-03-18", kpi: "離脱率", status: "実装" },

];
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