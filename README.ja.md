# LP改善ログ（Portfolio）

LP改善のログを「一覧 → 詳細」で見られるポートフォリオです。
エンジニア転向を決めてから約2週間、毎日2〜4時間ほど確保して、まずは「最低限動く（MVP）」状態を優先して実装・公開しました。現在も改善を継続しています。

## Demo
- https://lp-log.vercel.app/

## Features
- 一覧ページでログが表示される
- 詳細ページで1件のログが表示される（`/logs/[id]`）
- ステータスで絞り込みできる（URLクエリで状態保持）
- 0件時の空状態表示
- Vercelにデプロイして公開URLで閲覧可能

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
