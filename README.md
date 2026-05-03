# Sophie Fusco Mckeown — Portfolio

Personal portfolio site for Sophie Fusco Mckeown, built with Next.js and Sanity CMS.

## Tech Stack

- **[Next.js 16](https://nextjs.org)** (App Router) — React framework with server components
- **[Sanity v5](https://www.sanity.io)** — headless CMS for content management
- **[Tailwind CSS v4](https://tailwindcss.com)** — utility-first styling via PostCSS
- **[Embla Carousel](https://www.embla-carousel.com)** — carousel with autoplay
- **[React Icons](https://react-icons.github.io/react-icons/)** — icon library
- **TypeScript** — throughout

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

You can find your project ID and dataset in the [Sanity manage dashboard](https://www.sanity.io/manage).

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Using Sanity

### Accessing the Studio

The embedded Sanity Studio is available at [http://localhost:3000/studio](http://localhost:3000/studio) when the dev server is running. Log in with your Sanity account to edit content.

### Content Types

| Schema | Description |
|--------|-------------|
| `job` | Work experience entries shown on the home page |
| `about` | About section text and details |
| `service` | Services listed on the /services page |
| `quote` | Pull quote displayed on the /services page |

### Schemas

Schema definitions live in `sanity/schemaTypes/`. To add a new content type, create a schema file there and register it in `sanity/schemaTypes/index.ts`.

## Other Commands

```bash
npm run build    # Build for production
npm run lint     # Run ESLint
```
