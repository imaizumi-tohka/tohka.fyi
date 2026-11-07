# CLAUDE.md - tohka.fyi

個人ブログの本番プロジェクト。詳細は `README-for-AI.md` を参照。

## 要点
- Astro 5.x SSG + MultiTerm テーマ。Netlify が `main` push で自動ビルド
- ドメイン設定は `src/site.config.ts` の `site` / `title` / `description`
- 記事の日付キーは **`published:`**（`pubDate:` ではない）
- Obsidian の vault としても使う（`.obsidian/plugins/obsidian-git` が5分毎コミット・30分毎 push）
- git author は `Imaizumi Tohka <imaizumi.tohka+github.com@gmail.com>` 固定（GitHub の主メールと一致させる）

## 作業ルール
- **git の書き込み操作はしない**（commit / push / add / rm）。index は obsidian-git に任せ、削除は `rm`、移動は `mv` を使う
- **vault 内に Obsidian から見えないもの（ドットファイル・ドットディレクトリ）を置かない**。一時ファイルは `$TMPDIR` か vault 外へ。外部ツールの生成物（例: `.yomiyasu/`）は作業後に削除する
