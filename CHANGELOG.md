# Changelog

YouTube Surfing Desk の主な変更履歴を記録します。

## [1.0.0] — 正式リリース準備中

### Added
- DOMAIN → CATEGORY → TOPIC の階層からYouTube検索テーマを選択する機能。
- HOW（視聴スタイル）とFILTER（時代・場所）による検索語の調整。
- DISCOVERYによる関連テーマ・詳細テーマ・上位テーマ・ランダム探索などの操作（利用可能な機能は選択テーマによって異なります）。
- FREE QUERY入力、GENERATED QUERY表示、およびYouTube検索結果への遷移。
- PC・タブレット・スマートフォン向けのレスポンシブレイアウト。
- About / Disclaimer表示。

### Deployment and verification
- GitHub Pagesでの公開を設定。
- PCでの主要な選択・検索操作、スマートフォン幅390×844でのレイアウトと検索遷移を確認。
- Netlifyステージング環境でタブレット表示と主要操作を確認。

### Known limitations
- DISCOVERYの詳細データは一部のTOPICに限られます。すべてのTOPICで全操作が利用できるわけではありません。
- 全TOPIC・全DISCOVERY分岐の網羅的なテストは実施していません。

## Application Ver.1.0 RC.2
- Fixed About / Disclaimer JavaScript being embedded inside the external category-master `<script src>` element.
- Verified the intended script order:
  Category Master → Control Master → Discovery Master → Application → About/Disclaimer.
- Retained DOMContentLoaded-safe modal initialization.
- Restored the three production master JS files to the release package.
