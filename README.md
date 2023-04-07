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


## Todo

- 画像があると/_next以下どうなるかを確認。
- SSGがあるとどうなるかをテスト。build時にエラーになる?
- GitHub Pagesを試してみる。
