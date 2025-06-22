# Next.js 初期設定手順（プロジェクト既存ファイルありの場合）

このドキュメントは、既存のファイルがあるディレクトリでNext.js（TypeScript, ESLint, Tailwind CSS対応）を初期化する手順をまとめたものです。

---

## 1. 既存ファイルのバックアップ（必要な場合のみ）

Next.jsの初期化コマンドは、既存ファイルと競合する場合エラーになります。競合しそうなファイルやディレクトリがある場合は、必要に応じて一時的に退避させてください。

---

## 2. Next.jsプロジェクトの初期化

以下のコマンドでNext.jsプロジェクトを作成します。

```bash
npx create-next-app@latest . \
  --no-src \          # srcディレクトリを作らず、ルートにファイルを配置
  --typescript \      # TypeScript対応
  --eslint \          # ESLint導入
  --tailwind \        # Tailwind CSS導入
  --no-app \          # appディレクトリを作らない（pagesディレクトリ構成）
  --no-import-alias \ # importエイリアスを作らない
  --no-turbo          # Turbopackを使用しない（従来のWebpackを使用）
```

> 上記のオプションを指定することで、対話的な質問（srcディレクトリの使用、Turbopackの使用）をスキップできます。

---

## 3. 完了

これでNext.js（TypeScript, ESLint, Tailwind CSS対応）の初期設定が完了です。

---

## 参考
- [Next.js公式ドキュメント](https://nextjs.org/docs)
- [create-next-app公式](https://nextjs.org/docs/pages/api-reference/create-next-app) 