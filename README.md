# MDS Painting Website

This is the official website for MDS Painting, a professional painting company serving Ohio.

## Features

- Modern, responsive design built with Next.js and Tailwind CSS
- SEO optimized with proper metadata and schema markup
- Integration with GoHighLevel CRM for lead generation
- Fast performance with optimized images and components
- Mobile-friendly navigation and layout

## Tech Stack

- **Frontend Framework**: Next.js (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Form Handling**: GoHighLevel CRM integration
- **Analytics**: Google Analytics 4

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm or yarn

### Installation

1. Install Node.js if not already installed
2. Clone this repository
3. Install dependencies:
```
npm install
```
4. Run the development server:
```
npm run dev
```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

To build the application for production:

```
npm run build
```

To start the production server:

```
npm start
```

## Project Structure

- `src/app` - Next.js App Router pages
- `src/components` - Reusable UI components
- `src/styles` - Global styles and Tailwind configuration
- `public` - Static assets like images and fonts

## GoHighLevel Integration

For the contact forms, you'll need to replace the placeholder form in the ContactSection component with the GoHighLevel embed code. The embed code should be provided by GoHighLevel and can be placed in the `ghl-embed-form-container` div.

## Deployment

This site is designed to be deployed on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure your deployment settings
3. Deploy the site

## Maintenance

To update content on the site:

1. Edit the content in the corresponding component files
2. For image updates, replace files in the public directory
3. For SEO changes, update metadata in `src/app/layout.tsx`

## Support

For support or questions, contact the developer or refer to the Next.js documentation:
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) 