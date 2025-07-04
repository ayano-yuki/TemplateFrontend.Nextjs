# store/

## 目的

`store/` フォルダは、**アプリケーションの状態管理 (State Management)** に関連するファイルを格納するディレクトリです。

Reduxをはじめ、必要に応じて他の状態管理ライブラリの設定もここに集約します。

---

## 主な役割・内容

- **Redux ストアのセットアップ**
  - `store.ts` や `index.ts` にストアの作成処理
  - ミドルウェア、DevTools拡張などの設定

- **スライス（Slice）やリデューサ**
  - Redux Toolkitなどで作成した機能ごとのスライス
  - 状態とアクションの定義

- **セレクターやアクションクリエーター**
  - 状態の取得用セレクター関数
  - カスタムアクション

- **型定義**
  - `RootState`, `AppDispatch` などTypeScript用の型

---

## 命名・構成ルール（推奨）

- スライスは `slices/` サブディレクトリにまとめる
- ストア初期化ファイルは `store.ts`
- 型定義は `types.ts` に集約するか、各スライスに同梱する

---

## 注意点

- UIやページコンポーネントへの依存を避ける
- ビジネスロジックは必要に応じて `lib/` へ分離する

---

## 例（イメージ）

```sh
store/
├── slices/
│   ├── userSlice.ts      # ユーザー状態
│   └── settingsSlice.ts  # 設定状態
├── store.ts              # ストア作成
└── types.ts              # 型定義
```