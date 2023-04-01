This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- [Mock Service Worker](https://github.com/mswjs/msw)
  - Setup is done by following the following instructions:
    - [Install guide](https://mswjs.io/docs/getting-started/install)
    - [Mock Service Worker with Next](https://github.com/vercel/next.js/tree/canary/examples/with-msw)
      - [Here are some examples](https://mswjs.io/examples/)
  - Enable/Disable
    - Mocking is enabled using the `NEXT_PUBLIC_API_MOCKING` environment variable.