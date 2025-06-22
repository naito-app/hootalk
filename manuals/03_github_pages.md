# GitHub Pages デプロイ手順

このドキュメントは、Next.jsプロジェクトをGitHub Pagesにデプロイする手順をまとめたものです。

---

## 前提条件

- GitHubリポジトリが作成済み
- Next.jsプロジェクトが初期化済み
- GitHub Actions Extensionがインストール済み（推奨）

---

## 1. Next.js設定の更新

### next.config.tsの設定

```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  
  // GitHub Pages用の設定
  basePath: process.env.NODE_ENV === 'production' ? '/hootalk' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/hootalk/' : '',
  
  // 静的エクスポートを有効化
  output: 'export',
  
  // 画像最適化を無効化（静的エクスポートでは使用不可）
  images: {
    unoptimized: true,
  },
  
  // trailingSlashを有効化
  trailingSlash: true,
};

export default nextConfig;
```

### package.jsonのスクリプト追加

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build && next export",
    "deploy": "npm run build && touch out/.nojekyll"
  }
}
```

### .nojekyllファイルの作成

`public/.nojekyll`ファイルを作成：

```
# This file tells GitHub Pages not to process this site with Jekyll
```

---

## 2. GitHub Actionsワークフローの作成

`.github/workflows/deploy.yml`ファイルを作成：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v4
      
    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Setup Pages
      uses: actions/configure-pages@v4
      
    - name: Upload artifact
      uses: actions/upload-pages-artifact@v3
      with:
        path: './out'
        
    - name: Deploy to GitHub Pages
      id: deployment
      uses: actions/deploy-pages@v4
```

---

## 3. GitHubリポジトリの設定

### GitHub Pages設定

1. **リポジトリの「Settings」→「Pages」**
2. **Source**を「GitHub Actions」に設定
3. **Actions permissions**を確認：
   - 「Settings」→「Actions」→「General」
   - 「Workflow permissions」で「Read and write permissions」を選択

---

## 4. デプロイ実行

### コードのプッシュ

```bash
git add .
git commit -m "Add GitHub Pages configuration"
git push origin main
```

### 注意点

- リポジトリ名が`hootalk`の場合、URLは`https://[ユーザー名].github.io/hootalk`になります
- 異なるリポジトリ名の場合は、`next.config.ts`の`basePath`と`assetPrefix`を適切に変更してください

---

## 5. デプロイ確認

### GitHub Actionsの確認

1. **GitHubリポジトリページで「Actions」タブをクリック**
2. **「Deploy to GitHub Pages」ワークフローが実行されているか確認**
3. **各ステップが正常に完了するまで待機**

### サイトアクセス

- デプロイ完了後、数分で以下のURLでアクセス可能：
  - `https://[ユーザー名].github.io/hootalk`

---

## 6. 今後の開発フロー

1. **ローカルで開発** → `npm run dev`
2. **コードをプッシュ** → `git push origin main`
3. **自動デプロイ** → GitHub Actionsが自動実行
4. **サイト更新** → 数分後に反映

---

## トラブルシューティング

### 権限エラーが発生した場合

- GitHubリポジトリの「Settings」→「Actions」→「General」で権限を確認
- ワークフローファイルの`permissions`セクションが正しく設定されているか確認

### ビルドエラーが発生した場合

- ローカルで`npm run build`を実行してエラーを確認
- API routesを使用している場合は、静的エクスポートでは使用できないため削除または修正が必要

---

## 参考リンク

- [Next.js Static Export](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages](https://pages.github.com/)
- [GitHub Actions](https://github.com/features/actions) 