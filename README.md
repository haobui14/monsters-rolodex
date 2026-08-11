# Monster Rolodex Project

A searchable rolodex of monsters, built with **React 19**, **TypeScript**, and **Vite**.

## Getting Started

Install dependencies:

```sh
npm install
```

Then start the dev server:

```sh
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser. The
page hot-reloads as you edit.

## Available Scripts

| Script | What it does |
| --- | --- |
| `npm start` / `npm run dev` | Runs the app in development mode on port 3000. |
| `npm run build` | Type-checks with `tsc`, then builds to the `build/` folder. |
| `npm run preview` | Serves the built `build/` folder locally to sanity-check a production build. |
| `npm test` | Runs the test suite once (Vitest + React Testing Library). |
| `npm run test:watch` | Runs the tests in interactive watch mode. |
| `npm run lint` | Lints the project with ESLint. |

## Tech Stack

- [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) for dev server and bundling
- [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/react)
  for tests
- [ESLint](https://eslint.org/) (flat config, `eslint.config.js`)

## Project Structure

```
index.html                 # Vite entry point
vite.config.ts             # Vite + Vitest config
eslint.config.js           # ESLint flat config
public/                    # Static assets served at the site root
src/
  main.tsx                 # App bootstrap (ReactDOM.createRoot)
  App.tsx                  # Root component, fetches + filters monsters
  App.test.tsx             # Tests for the root component
  components/              # Card, CardList, SearchBox
  utils/data.utils.ts      # Typed fetch helper
```

Monster data comes from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users)
and avatars from [Robohash](https://robohash.org/).

## Notes

This project was originally bootstrapped with Create React App. CRA was deprecated in
February 2025 and its dependency tree carried unfixable advisories, so the build
tooling was migrated to Vite. The `build/` output directory was kept (instead of
Vite's default `dist/`) so existing deployment setups continue to work.
