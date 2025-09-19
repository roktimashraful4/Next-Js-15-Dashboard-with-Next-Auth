# Next.js Dashboard

This is a dashboard application built with Next.js, TypeScript, and Tailwind CSS. It includes features like user authentication, a dashboard with charts, and sections for managing posts and users.

## Features

*   **Authentication:** User authentication powered by NextAuth.js. Includes a login page, and signout functionality.
*   **Dashboard:** A central dashboard displaying key metrics and information.
    *   Interactive charts using ApexCharts and React Trend.
    *   Dashboard cards for displaying summary information.
*   **Posts:** A section for managing and displaying posts.
*   **Users:** A section for managing and displaying users.
*   **Profile:** A user profile page.
*   **Rich UI Components:** A rich set of UI components are available, including a navbar, sidebar, and various cards and charts.
*   **Custom Hooks:** Custom hooks for fetching data and managing UI state.

## Technologies Used

*   **Framework:** [Next.js](https://nextjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Authentication:** [NextAuth.js](https://next-auth.js.org/)
*   **UI:**
    *   [Framer Motion](https://www.framer.com/motion/) for animations.
    *   [Lucide React](https://lucide.dev/guide/packages/lucide-react) for icons.
*   **Charting:**
    *   [ApexCharts](https://apexcharts.com/)
    *   [React Trend](https://github.com/unsplash/react-trend)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Linting:** [ESLint](https://eslint.org/)

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


### `src/app`

This directory contains the main application pages and API routes.

### `src/components`

This directory contains the reusable React components used throughout the application.

### `src/hooks`

This directory contains custom React hooks.

### `src/types`

This directory contains TypeScript type definitions.

### `src/utils`

This directory contains utility functions.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.