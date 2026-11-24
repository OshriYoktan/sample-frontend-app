# AGENTS.md: conventions for AI agents working in this repository

## What this is
A small React 19 + TypeScript + MUI app that shows customers, their orders, and products from **sample-backend-api** (proxied at `/api` → `http://localhost:5080`).

## Structure
- `src/api/types.ts`: TypeScript mirrors of the backend DTOs (camelCase). **Update these when a backend DTO changes.**
- `src/api/ordersApi.ts`: one exported async function per backend endpoint, using the shared axios instance from `src/api/http.ts`. **Components never call axios directly.**
- `src/hooks/useAsync.ts`: the data-loading hook every page uses. Don't add other data-fetching libraries.
- `src/components/`: small reusable components (`LoadState` for loading and error handling, `OrderStatusChip`).
- `src/pages/`: one component per route; routes are registered in `src/App.tsx`.
- `src/utils/format.ts`: currency and date formatting (API dates are UTC without a `Z` suffix).

## Conventions
- MUI components only (no other UI libraries); use `sx` for one-off styling.
- Pages render through `<LoadState state={...}>` instead of hand-written loading and error branches.
- Function components, default export per page or component file, named exports for API functions.
- Strict TypeScript: no `any`.

## Tests
- Vitest + Testing Library, next to the file under test (`*.test.ts(x)`).
- Mock the API module (`vi.mock('../api/ordersApi')`), never the network.
- Run: `node node_modules/vitest/vitest.mjs run` (or `npm test`). Type-check: `node node_modules/typescript/bin/tsc --noEmit`.
