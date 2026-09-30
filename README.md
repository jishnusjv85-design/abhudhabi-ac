# AR Cooling Solutions

Responsive single-page website for AR Cooling Solutions, providing AC service,
repair, cleaning, installation and maintenance across Kozhikode, Kerala.

## Development

```bash
npm ci
npm run dev
npm run build
npm run preview
```

## Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React

## Deployment

The production build is generated in `dist/`. The repository is linked to
Vercel and the current public deployment is:

https://abhudhabi-ac.vercel.app/

## Before launch

Add the confirmed AR Cooling Solutions WhatsApp number to the booking form and
floating WhatsApp button. The current links prepare a message but cannot route
it directly to the business without that number.
# Launch content checklist

## Website imagery

The sixteen generated illustrative WebP images in `public/images/` cover the hero, service cards, AC systems, Kozhikode coverage, service process, pricing and booking sections. They depict example scenes, not AR Cooling Solutions staff, customers or completed jobs. The separate “Our work” section below is reserved for genuine, approved photos. Keep the illustrative label in the footer while these images are used.

## Business WhatsApp

Set `VITE_BUSINESS_WHATSAPP` in the Vercel project environment variables to the **verified business number in international format, digits only** (for example, `919876543210`). Redeploy after setting it. The floating button will then open a direct chat, and prepared service requests can open WhatsApp with the entered details. Without a verified number, the button leads to the booking form and requests remain copyable for manual sharing.

## Visit charges and prices

The site asks customers to confirm the visit or inspection charge before scheduling and to approve the work after inspection. Replace this with the business's actual charge and pricing policy when available. Do not publish an unverified price.

## Genuine service photos

Put approved photos in `public/work/`, then add entries to the `workPhotos` list near the top of `src/App.jsx` in this format:

```js
{ src: '/work/cleaning-job.webp', alt: 'Technician cleaning a split AC indoor unit', caption: 'Split AC deep cleaning in Kozhikode' }
```

The work section stays hidden until genuine images are configured. Export compressed WebP images around 1200 px wide, remove customer identifying details, and get permission to use them.
