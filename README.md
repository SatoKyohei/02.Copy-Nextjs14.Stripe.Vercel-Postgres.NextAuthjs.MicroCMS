## 写経
電子記事販売WebアプリケーションをNext.jsをフル活用して実践力を身に着けるWeb開発マスター講座
https://www.udemy.com/course/book-commerce-web-dev-with-nextjs/learn/lecture/41212172#content

<br/>
<br/>

## 技術スタック
- Next.js
- Vercel Postgres
- NextAuth.js
- Prisma
- API Route
- Stripe
- tailwindcss

<br/>
<br/>

## 実行したコマンド（順不同）
- npm i next-auth
- npm i @next-auth/prisma-adapter
- npm i -g vercel
- npm i @prisma/client
- npm i @vercel/postgres
- npm i microcms-js-sdk
- npx prisma init
- npx prisma migrate dev --name init
- npx prisma migrate dev
- npm i stripe
- npm i react-spinners
- openssl rand -base64 32

## 学べる点
- Next-Auth
- Vercel PostgreSQLの設定
- Vercel と Next.jsの環境変数紐付け
- microCMSのWebhook設定
- Stripeの連携
- prismaの使い方
  
## 使用した外部サービス
- [PageSpeed Insights](https://pagespeed.web.dev/analysis/https-vercel-com-login/e6g54h7t7o?form_factor=mobile)
- [microCMS](https://satokyoheitest.microcms.io/apis/bookcommerce)
  - Webhook設定
  - 記事投稿
- [Stripe](https://dashboard.stripe.com/test/dashboard)
- [Vercel](https://vercel.com/satokyoheis-projects/02-copy-nextjs14-stripe-vercel-postgres-next-authjs-micro-cms)
  - 環境変数設定：Settings - Environment Variables
  - Vercel PostgreSQL：Storage - nextjs-dashboard-postgres

<br/>
<br/>

## 他
- 初学者の時に取り組んだ教材なのでかなり有益な内容だったが、動画中ではanyを多用したりエラー修正に動画何本も費やしていたからか、わりとバグが多く残っている。非常に参考にはなるが、本番にそのまま実装するのは考え直した方が良い。
- 講義中ではリファクタリングはあまりしてないので、自分でやるしかない
