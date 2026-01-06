# Polysynth Website

A modern, responsive website for Polysynth - a multi-material resin 3D printing startup.

## Features

- **Home Page** - Hero section with product showcase and key features
- **Product Page** - Detailed information about the poly1-mini printer
- **Waitlist Page** - Join the waitlist to be notified when the product launches
- **About Page** - Company mission, founder information, and values
- **Contact Page** - Contact information for Eric Potempa

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **CSS Modules** - Scoped styling
- **Vercel** - Deployment platform

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add your images to the `public` folder:
   - `logo.png` - The Polysynth logo
   - `printer-render.png` - The poly1-mini printer render

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

This project is configured for deployment on Vercel.

### Deploy to Vercel

1. Push your code to a GitHub repository
2. Import the project in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

The `vercel.json` file is included for additional configuration if needed.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── product/           # Product page
│   ├── waitlist/          # Waitlist page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/            # React components
│   └── Navigation.tsx     # Navigation component
├── public/                # Static assets
│   ├── logo.png          # Logo image
│   └── printer-render.png # Printer render
└── package.json           # Dependencies

```

## Customization

- Update contact information in `app/contact/page.tsx`
- Modify content in respective page files
- Adjust styling in CSS module files
- Update metadata in `app/layout.tsx`

## License

Copyright © 2024 Polysynth. All rights reserved.
