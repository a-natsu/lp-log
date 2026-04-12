import Link from "next/link";

import { notFound } from "next/navigation";

import { logs } from "../../data/logs";

import { statusBadgeClass } from "../../components/statusBadgeClass";

import { use } from "react";

export default function LogDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);

  const log = logs.find((l) => l.id === id);

  if (!log) {
    notFound();
  }

  return (
    //画面全体の土台。横幅をほどよく制限して（max-w-2xl）、真ん中に寄せて（mx-auto）、周りに余白（p-6）を作っている
    <main className="max-w-2xl mx-auto w-full px-4 py-6 sm:px-6">
      <div className="mb-4">
        {" "}
        {/* 下に少し隙間（mb-4）を作るための箱 */}
        {/* トップページ（/）へ戻るためのリンク。文字を小さく（text-sm）して、控えめなグレー色にしている */}
        <Link
          href="/"
          className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 active:bg-gray-100"
        >
          一覧に戻る
        </Link>
      </div>

      {/* 詳細情報のメインカード。角を丸くして（rounded-xl）、薄いグレーの線で囲んで、中身を白くしている */}
      <article className="rounded-2xl border border-gray-200 bg-white p-4 sm:p-6">
        {/* タイトルとステータスを「横並び（flex）」にして、両端に寄せる（justify-between）ための見出し部分 */}
        <header className="flex items-start justify-between gap-3">
          <div>
            {/* 改善ログのタイトル。少し太字（font-semibold）でわかりやすく */}
            <h1 className="text-xl font-semibold text-gray-900">{log.title}</h1>
            {/* どのLPの話かを表示。タイトルの下に少し隙間（mt-1）を作っている */}
            <p className="mt-1 text-sm text-gray-600">{log.lp}</p>
            {/* 詳細ページに本文（やったこと/学び）を表示。読みやすい行間（leading-6） */}
            <p className="mt-4 text-sm leading-7 text-gray-700 whitespace-pre-line">
              {log.body}
            </p>
          </div>
          {/* 「完了」等のステータス。角丸のバッジ（rounded-full）みたいな見た目にしている */}
          <span
            className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-medium ${statusBadgeClass(log.status)}`}
          >
            {log.status}
          </span>
        </header>
        {/* 日付やKPIを並べる「リスト形式」の箱 */}
        <dl className="mt-4 grid grid-cols-1 gap-3 text-sm">
          {/* 項目ごとに「上に線（border-t）」を引いて、少し余白（pt-3）を作って、左右に広げる（flex justify-between）ための仕切り */}
          <div className="flex justify-between border-t border-gray-200 pt-3">
            {/* 左側のラベル（「日付」という文字） */}
            <dt className="text-gray-500">日付</dt>
            {/* 右側の実際のデータ（2026/04/01 とか） */}
            <dd className="text-gray-900">{log.date}</dd>
          </div>
          {/* 項目ごとに「上に線（border-t）」を引いて、少し余白（pt-3）を作って、左右に広げる（flex justify-between）ための仕切り */}
          <div className="flex justify-between border-t border-gray-200 pt-3">
            {/* 左側のラベル（「日付」という文字） */}
            <dt className="text-gray-500">KPI</dt>
            {/* 右側の実際のデータ（離脱率 とか） */}
            <dd className="text-gray-900">{log.kpi}</dd>
          </div>
        </dl>
      </article>
    </main>
  );
}
