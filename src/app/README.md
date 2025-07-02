# app/

## 目的

`app/` フォルダは、**Next.js App Router のルーティングとページ構成を定義**するディレクトリです。

Next.js 13以降で導入されたApp Routerに対応しており、ページやレイアウト、テンプレートを柔軟に管理できます。

---

## 主な役割・内容

- **ルートレイアウトの定義**
  - `layout.tsx`: アプリ全体の共通レイアウト。
- **ページコンポーネント**
  - `page.tsx`: 各ルート（URL）の画面定義。
- **ローディングUI、エラーハンドリング**
  - `loading.tsx`, `error.tsx`: ページごとのロード中・エラー表示。
- **メタデータ管理**
  - `metadata` オブジェクトでSEOメタ情報を設定。

---

## 注意点

- `app/`配下は基本的に**サーバーコンポーネント**になります。
  - クライアントサイドのみで動かしたい場合は`"use client"`を宣言してください。
- 従来の`pages/`ディレクトリとは併用可能ですが、通常は`app/`を使います。
- APIルートは`app/api/`に配置可能です。

---

## 例（イメージ）

```sh
app/
├── layout.tsx         # アプリ全体のレイアウト
├── page.tsx           # トップページ
├── about/
│   ├──components/     # /about 内でしか使わないコンポーネント
│   ├── page.tsx       # /about のページ
│   └── loading.tsx    # /about ロード中UI
├── dashboard/
│   ├──components/     # /dashboard 内でしか使わないコンポーネント
│   ├── layout.tsx     # /dashboard 配下のレイアウト
│   └── page.tsx       # /dashboard のトップページ
```