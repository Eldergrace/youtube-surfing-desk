# YouTube Surfing Desk — Ver.1.0

YouTube Surfing Deskは、興味のあるテーマをたどりながらYouTubeの検索語を組み立てる、非公式の検索支援Webアプリケーションです。動画の閲覧や検索結果の表示はYouTube上で行います。

## 公開サイト

https://eldergrace.github.io/youtube-surfing-desk/

## 主な機能

- **DOMAIN → CATEGORY → TOPIC**：分野・カテゴリ・テーマを順に選択します。
- **HOW**：動画の見方・学び方に合わせて検索語を調整します。
- **FILTER**：時代や場所などの条件を指定します。
- **DISCOVERY**：関連テーマ、より細かなテーマ、広いテーマ、ランダムなテーマなどを探索します。利用できる項目はテーマによって異なります。
- **FREE QUERY**：自由なキーワードを追加できます。
- **GENERATED QUERY**：組み立てた検索語を確認し、「YouTubeで見る」からYouTubeの検索結果を開きます。

## 使い方

1. DOMAIN、CATEGORY、TOPICから関心のあるテーマを選びます。
2. 必要に応じてHOW、FILTER、DISCOVERY、FREE QUERYを使用します。
3. GENERATED QUERYを確認し、**「YouTubeで見る」**を押します。

## 対応画面・動作確認

PC・タブレット・スマートフォン向けのレスポンシブレイアウトを備えています。公開前の主要操作はChromeを使用して確認しています。すべての端末・ブラウザでの動作を保証するものではありません。

## 技術構成

静的なHTML、CSS、JavaScriptで構成され、GitHub Pagesで公開しています。主なデータファイルは以下のとおりです。

- `index.html`：アプリケーション画面と処理
- `js/category-master.js`：カテゴリ・トピック関連データ
- `js/control-master.js`：検索条件関連データ
- `js/discovery-master.js`：テーマ探索関連データ
- `.nojekyll`：GitHub PagesのJekyll処理を無効化するためのファイル

### スクリプトの読み込み順序

1. `js/category-master.js`
2. `js/control-master.js`
3. `js/discovery-master.js`
4. メインアプリケーションスクリプト
5. About / Disclaimer初期化スクリプト

外部スクリプトの`<script src="...">`要素は、後続のインラインJavaScriptより前に閉じる構成です。

## 現行版の制限事項

- DISCOVERYの詳細な候補データは一部のTOPICを対象としたパイロット実装です。選択したテーマによって使用できない探索機能があります。
- YouTubeの検索結果や掲載動画の内容・順位は、本アプリケーションでは制御しません。
- すべてのテーマや探索経路を網羅的に検証したものではありません。

## 非公式ツール・免責事項

本ツールはYouTubeおよびGoogleが提供・承認・提携・運営するサービスではありません。検索語や外部コンテンツの正確性、完全性、安全性、有用性、最新性を保証しません。重要な判断には一次情報や専門家の情報も確認してください。

プライバシーに関する現行方針と詳細な免責事項は、アプリケーション内の**Disclaimer**をご覧ください。

## バージョン

**Ver.1.0** — GitHub Pages正式公開版（リリース準備中）。

RC.2での修正内容を含む変更履歴は、`CHANGELOG.md`に記録します。正式リリース時にこの「リリース準備中」の表記を更新してください。
