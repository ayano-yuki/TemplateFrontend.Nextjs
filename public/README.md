# public/

## 目的

`public/` フォルダは、アプリケーションで使用する**静的ファイルを格納**するディレクトリです。

Next.js ではこのフォルダ内のファイルはビルド時にそのまま公開ディレクトリにコピーされ、  
`/` ルートから直接アクセス可能になります。

---

## 主な役割・内容

- **画像やアイコン**
  - ロゴ、OGP画像、ファビコンなど。
- **robots.txt や sitemap.xml**
  - SEO関連の静的ファイル。
- **静的JSONやその他のアセット**
  - 公開が必要なファイル群。

---

## 注意点

- `public/` 内のファイルはビルド後に**URLで直接アクセス可能**です。
  - 例: `public/images/logo.png` → `https://example.com/images/logo.png`
- JavaScriptやTypeScriptのコードはここに置かないでください。
- ファイルサイズが大きいものはCDN等での配信も検討してください。

---

## 例（イメージ）

```sh
public/
├── favicon.ico         # ファビコン
├── robots.txt          # クローラー制御
├── images/
│   └── logo.png        # ロゴ画像
├── ogp/
│   └── default.png     # OGP画像
```