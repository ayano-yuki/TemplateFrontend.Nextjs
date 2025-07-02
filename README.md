# Template Frontend

This is a Next.js project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app), extended with Redux for state management, centralized API communication, and testing setup using Jest and React Testing Library.

---

## Features

- **Next.js 15** with App Router (`src/app` directory)
- **Redux Toolkit** for global state management (`src/store`)
- **Centralized API communication** via a dedicated API client (`src/lib/api.ts`)
- **TypeScript** support with shared types (`src/types`)
- **Testing** setup with Jest and React Testing Library (`src/__tests__`)
- **Tailwind CSS** integration for styling (`src/styles`)
- Organized folder structure for scalability:
  - `app/` for Next.js pages and layouts
  - `components/` for reusable UI components
  - `hooks/` for custom React hooks
  - `lib/` for utilities like API client
  - `store/` for Redux slices and store configuration
  - `types/` for shared TypeScript types
  - `utils/` for general utilities
  - `__tests__/` for test files

---

## Getting Started

### Install dependencies

```bash
npm install
# or
yarn
# or
pnpm install
```
### Run development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000 to view the app in your browser.

### Environment Variables
Create a .env.local file in the root directory to store environment-specific variables, such as API base URLs or keys.

```ini
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
```

### Testing
Run tests with:
```bash
npm run test
```
This runs Jest with React Testing Library integration.

## Project Structure
See individual README files in each folder under src/ for detailed descriptions of their purpose and usage.

## Learn More
- [Next.js Documentation](https://nextjs.org/docs)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- [Tailwind CSS](https://tailwindcss.com/docs/installation/using-vite)

## Deployment
The recommended way to deploy this app is via [Vercel](https://vercel.com/), the creators of Next.js.
For detailed instructions, refer to [Next.js Deployment Docs](https://nextjs.org/docs/app/getting-started/deploying).

## Notes
- API calls are centralized in src/lib/api.ts and should be used across components/pages to maintain consistency.
- Redux state is provided globally via the Provider wrapping the root layout.
- The project is configured for React Server Components, but client-only features are carefully isolated to Client Components.
