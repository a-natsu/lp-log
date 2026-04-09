# LP改善ログ（Portfolio）

LP改善のログを「一覧 → 詳細」で見られるポートフォリオです。

## Demo
- https://lp-log.vercel.app/

## Features
- ログ一覧（カード表示）
- ログ詳細（/logs/[id]）
- ステータスフィルタ（URLに状態を保持：`/?status=完了`）
- フィルタ結果が0件のときの表示（空状態）

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Vercel

## Notes（意識したこと）
- TypeScriptで型を揃えて保守しやすく（例：`Status` を union 型で定義）
- `npm run build` を通してから push（本番相当のチェックをしてから反映）

## Getting Started
cd lp-log

npm install

npm run dev


## Build
npm run build
