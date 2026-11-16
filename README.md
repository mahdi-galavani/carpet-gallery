# Kheyri carpet gallery

An Angular presentation site with locally managed, illustrative carpet content. No backend is required for the page.

## Run and build

```bash
npm install
npm start
npm run build
```

Open the address printed by the development server. The production build is written to `dist/`.

## Content

Edit `src/app/data/carpets.ts` to add or update carpets and regional collections. Give each carpet a unique ID and slug, choose a category matching a category name, and put replacement images in `public/images`. The current entries and images are illustrative; verify all details before presenting actual inventory.

Set the Instagram, WhatsApp and optional Telegram URLs in `SOCIAL_LINKS` in the same file. Leave a value empty until the account is ready; empty links are not clickable. Set `phone` to a telephone number when available.
