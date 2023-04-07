# nextjs-mdx-static

MDX を含む app dir の Next.js(13.3) で
[Static Export for App Router](https://nextjs.org/blog/next-13-3#static-export-for-app-router)
をやってみた例。

TypeScript で pnpm。

https://github.com/vercel/next.js/tree/canary/examples
の
[app\-dir\-mdx](https://github.com/vercel/next.js/tree/canary/examples/app-dir-mdx)
をもとに

```bash
pnpm create next-app@latest nextjs-mdx-static --ts --use-pnpm --example app-dir-mdx
```

から始めていろいろ削ったもの。
Reactの超簡単なコンポーネント含む(そこだけCSR)。


## 手順

1. app dirで作る。
2. `pnpm dev` で 一生懸命開発する。
3. nextConfig に `output: 'export'`
4. `pnpm build` で プロジェクトルート直下の `./out` 以下にビルドされる。
5. `http-server ./out` で テストしてみる。

## メモ

- index.html と about.html が実際に出来るので、SPAではない。各々がSPA


## GitHub Pages

gh-pagesブランチにpushすると
https://heiwa4126.github.io/nextjs-mdx-static/
にデプロイされる。

要点は以下の通り:

- GitHubの設定で
   - Settings -> Pages -> Source -> GitHub Actions
   - Settings -> Environments -> Deployment branchesにgh-pagesを追加
- `.github\workflows\pages.yml` を書く。
- next.config.js で `basePath`と`assetPrefix`を設定する。
- `/`に戻るリンクは `<Link href="/index>` にする。

これでとりあえず動く。


## TODO

- 画像があると/_next以下どうなるかを確認。
- SSGがあるとどうなるかをテスト。build時にエラーになる?
- GitHub Pagesを試してみる。⇒ やった。上記参照
