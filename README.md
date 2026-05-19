# 長崎くんちフォトコン 2026 公式サイト

長崎くんちフォトコン2026の応募者向けランディングページです。HTML / CSS / Vanilla JS のみで構成された静的サイトで、GitHub Pages にそのまま公開できます。

## ファイル構成

```
フォトコン/
├── index.html                              … 1ページLP（全コンテンツ）
├── css/
│   └── style.css                           … スタイル一式
├── js/
│   └── script.js                           … モバイルメニュー開閉
├── assets/
│   ├── images/
│   │   ├── poster-placeholder.svg          … ヒーローの仮ポスター画像
│   │   ├── logo.svg                        … ロゴ（仮）
│   │   └── og-image-placeholder.svg        … OGP用画像（仮）
│   └── pdf/
│       ├── poster.pdf                      … ポスターPDF
│       └── application-form.pdf            … プリント部門 申込用紙PDF
└── README.md
```

## ローカルでの確認方法

1. `index.html` をブラウザ（Chrome / Edge / Safari など）でダブルクリックして開きます。
2. または、フォルダで右クリック → 「Live Server で開く」など、簡易サーバで開くと一部の機能（DLボタンの挙動など）がより本番に近い形で確認できます。
3. モバイル表示を確認するには、ブラウザの開発者ツール（F12）でデバイスエミュレータを使ってください。

## 素材の差し替え

仮素材で公開している箇所は、以下のファイルを上書き保存するだけで差し替わります（ファイル名は変更しないでください）。

| 差し替える画像 | パス | 推奨サイズ |
|---------------|------|----------|
| ポスター画像 | `assets/images/poster-placeholder.svg` | 縦長（例：1200×1700px）/ JPGに変える場合は下記の注意参照 |
| ロゴ | `assets/images/logo.svg` | 横長（推奨：280×56px） |
| OGP画像 | `assets/images/og-image-placeholder.svg` | 1200×630px（SNSシェア用） |

### JPG / PNG に差し替える場合

ファイル形式を変える場合は、`index.html` 内の `src=` パスも合わせて修正してください。

```html
<!-- 例：ポスターをJPGに差し替え -->
<img src="assets/images/poster.jpg" alt="長崎くんちフォトコン2026 ポスター" ...>
```

OGP画像（SNSシェア時のサムネ）は JPG / PNG にすることを推奨します。Twitter/Facebook では SVG が表示できない場合があります。

```html
<!-- index.html の <head> 内 -->
<meta property="og:image" content="assets/images/og-image.jpg">
```

### PDFを差し替える場合

- `assets/pdf/poster.pdf` … ポスターのPDF（更新時はこのファイル名のまま上書き）
- `assets/pdf/application-form.pdf` … プリント部門の申込用紙PDF

## テキスト・情報の編集

応募要項などのテキストはすべて `index.html` 内に書かれています。以下のセクション目印を目当てに編集してください。

| セクション | HTML内の目印 |
|----------|-------------|
| 開催概要 | `<!-- =============== About =============== -->` |
| プリント部門 | `<!-- =============== Print =============== -->` |
| インスタ部門 | `<!-- =============== Instagram =============== -->` |
| 賞・表彰 | `<!-- =============== Awards =============== -->` |
| スケジュール | `<!-- =============== Schedule =============== -->` |
| 協賛 | `<!-- =============== Sponsors =============== -->` |
| お問い合わせ | `<!-- =============== Footer =============== -->` |

## GitHub Pages へのデプロイ手順

### 初回セットアップ

1. **GitHubアカウントを作成**（未取得の場合）
   - https://github.com/signup から無料で作成できます。

2. **新規リポジトリを作成**
   - GitHubトップで「New repository」をクリック
   - Repository name に好きな名前（例：`nagasakikunchi-photocon`）を入力
   - **Public** を選択（無料プランで Pages を使う場合は Public 必須）
   - 「Create repository」をクリック

3. **このフォルダの中身をアップロード**
   - 表示された画面で「uploading an existing file」リンクをクリック
   - エクスプローラから `フォトコン` フォルダの中身（`index.html` 以下）をすべてドラッグ＆ドロップ
   - 「Commit changes」をクリック

4. **GitHub Pages を有効化**
   - リポジトリの「Settings」タブを開く
   - 左メニューから「Pages」を選択
   - 「Build and deployment」の Source を **Deploy from a branch** に設定
   - Branch を **main** / **/(root)** に設定して「Save」
   - 1〜2分待つと、ページ上部に公開URLが表示されます
   - URL例: `https://(ユーザー名).github.io/nagasakikunchi-photocon/`

### 更新するとき（2回目以降）

- GitHub 上で直接ファイルを編集して「Commit」するだけで反映されます。
- または、GitHub Desktop アプリで一括アップロードする方法もあります。

## 独自ドメインを使う場合（任意）

別途取得したドメイン（例：`kunchi-photocon.jp`）を使いたい場合：

1. ドメイン提供事業者の DNS 設定で、CNAMEレコードを `(ユーザー名).github.io` に向ける
2. リポジトリ直下に `CNAME` ファイルを作成し、独自ドメインを記入
3. GitHub の Settings > Pages > Custom domain で同じドメインを入力 → Save

## 動作確認チェックリスト

- [ ] PC（横幅1280px以上）で全セクションが正常に表示される
- [ ] スマホ（横幅375px）でレイアウトが崩れていない
- [ ] ハンバーガーメニューが開閉する
- [ ] 「申込用紙をダウンロード」ボタンで PDF がダウンロードされる
- [ ] 「公式Instagramを見る」ボタンで Instagram が新規タブで開く
- [ ] 電話番号「095-824-0445」をスマホでタップすると発信できる
- [ ] ナビゲーションのリンクで各セクションへスムーズスクロールする

## 今後の拡張案（今回のスコープ外）

- 過去受賞作品ギャラリー（年度別）
- Instagram タグ付き投稿の自動表示（Instagram Graph API）
- 令和8年踊町（上町・筑後町・元船町・鍛冶屋町・今籠町・油屋町）の紹介
- Webフォームでの応募受付
- 多言語対応（英語・中国語）

---

主催：長崎くんちフォトコン実行委員会
お問い合わせ：諏訪神社 くんちフォトコン係 095-824-0445
