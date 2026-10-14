# Changelog

## Application Ver.1.0 RC.2
- Fixed About / Disclaimer JavaScript being embedded inside the external category-master `<script src>` element.
- Verified the intended script order:
  Category Master → Control Master → Discovery Master → Application → About/Disclaimer.
- Retained DOMContentLoaded-safe modal initialization.
- Restored the three production master JS files to the release package.
