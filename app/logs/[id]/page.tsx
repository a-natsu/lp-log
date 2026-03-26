import Link from "next/link";

export default async function LogDetailPage({

params,

}: {

params: Promise<{ id: string }>;

}) {

const { id } = await params;

return (

<main>

<h1>詳細ページ</h1>

<p>id: {id}</p>

<Link href="/">← 一覧に戻る</Link>

</main>

);

}