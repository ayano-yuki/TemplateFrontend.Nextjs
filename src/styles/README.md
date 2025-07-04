# styles/

## 目的

`styles/` フォルダは、**グローバルCSS・共通スタイル・テーマ**を管理するディレクトリです。

Next.js プロジェクト全体で使用するスタイルを一箇所に集約します。

---

## 主な役割・内容

- **グローバルスタイル**
  - `globals.css` など全ページに適用するベースCSS
  - リセットCSS（normalize.cssなど）

- **テーマ設定**
  - カラーパレット
  - タイポグラフィ
  - ダークモード設定

- **ユーティリティクラス**
  - レイアウト用の共通クラス
  - ヘルパー系CSS

- **Tailwind CSS やその他CSSフレームワークのカスタマイズ**
  - `tailwind.css`
  - Tailwindのカスタム設定をimport

---

## 命名・構成ルール（推奨）

- `globals.css` は常に1つ作成し、共通スタイルを定義する
- 機能や目的別にファイルを分割する
  - 例: `reset.css`, `theme.css`, `typography.css`
- 可能であれば、CSS Modulesはコンポーネント側に配置する

---

## 注意点

- CSS Modulesはこのディレクトリには置かず、各コンポーネントと同じ場所に作成する
- グローバルに適用されるスタイルだけをここにまとめる

---

## 例（イメージ）

```sh
styles/
├── globals.css       # グローバルスタイル
├── reset.css         # リセットCSS
├── theme.css         # カラーテーマ
└── typography.css    # タイポグラフィ設定
```