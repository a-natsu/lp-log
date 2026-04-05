import Link from "next/link";

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto p-6 md:p-12 text-center">
      <h1 className="text-2xl font-bold text-gray-900">
        ページが見つかりません
      </h1>
      <p className="mt-2 text-sm text-gray-600">
        URLが間違っているか、ページが移動した可能性があります。
      </p>

      <div className="mt-8">
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-gray-900 px-5 py-2 text-sm font-medium text-white hover:bg-gray-800 transition-colors"
        >
          トップページに戻る
        </Link>
      </div>
    </main>
  );
}
