This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/zeit/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install:

```bash
npm install
```

Then, copy the font files from `asc-assets`:

```bash
npm run copy-fonts
```

Finally, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

**NOTE** In order to get the fonts in your project, you either need to copy and run the [./scripts/copy_fonts.sh](./scripts/copy_fonts.sh) script in your project or manually copy the [fonts directory in asc-assets](./node_modules/@amsterdam/asc-assets/static/fonts) to the [public](./public) directory. Then you'll need to load the css file in [./pages/_app.js](./pages/_app.js). For more information, see [the asc-assets readme](https://github.com/Amsterdam/amsterdam-styled-components/tree/main/packages/asc-assets#fonts)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/zeit/next.js/) - your feedback and contributions are welcome!

## Deploy on ZEIT Now

The easiest way to deploy your Next.js app is to use the [ZEIT Now Platform](https://zeit.co/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
