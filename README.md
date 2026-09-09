# CoolTech Engineering Abu Dhabi

A precision HVAC & AC mechanical engineering website built with **React** + **Vite** + **Tailwind CSS**.

## Project Structure

```
src/
├── App.jsx                    # Root component — composes all sections
├── main.jsx                   # React entry point
├── index.css                  # Tailwind directives + custom utility classes
└── components/
    ├── Icon.jsx               # Dynamic Lucide icon wrapper
    ├── AirFlowCanvas.jsx      # Animated background canvas
    ├── TopBar.jsx             # Emergency dispatch top strip
    ├── Navbar.jsx             # Sticky header + mobile menu
    ├── Hero.jsx               # Hero section with telemetry widget
    ├── StatsBar.jsx           # Engineering stats strip
    ├── Services.jsx           # Service catalog with category filter
    ├── Calculator.jsx         # UAE-calibrated HVAC sizing calculator
    ├── Emergency.jsx          # 24/7 dispatch simulator
    ├── Projects.jsx           # Abu Dhabi project portfolio
    ├── AMC.jsx                # Maintenance contract tiers
    ├── Contact.jsx            # Contact info + audit scheduling form
    ├── Footer.jsx             # Site footer
    ├── WhatsAppButton.jsx     # Floating WhatsApp CTA
    └── QuoteModal.jsx         # Engineering proposal modal
```

## Development

```bash
npm install       # Install dependencies
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # Build for production
npm run preview   # Preview production build locally
```

## Tech Stack

- **React 18** — UI library
- **Vite 5** — Build tool & dev server
- **Tailwind CSS 3** — Utility-first styling
- **Lucide React** — Icon library
- **PostCSS** — CSS processing pipeline

## Features

- Responsive dark-mode design with Gulf-themed color palette
- Animated airflow particle background canvas
- Interactive HVAC tonnage calculator (calibrated for 50°C Abu Dhabi conditions)
- 24/7 emergency dispatch simulation
- Bilingual (English / Arabic) support
- Glass-morphism card design patterns
- Mobile-first responsive layout
