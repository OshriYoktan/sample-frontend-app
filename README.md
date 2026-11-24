# sample-frontend-app

A small React + TypeScript + MUI app over **sample-backend-api**. Like the backend, it is a **safe test subject** for the AI Development Orchestrator, not a product.

Pages: customers (`/customers`), a customer's orders (`/customers/:id/orders`), products (`/products`).

```bash
npm install
npm run dev        # http://localhost:5173, proxies /api to http://localhost:5080
npm test           # Vitest
npm run typecheck
```

See [AGENTS.md](AGENTS.md) for structure and conventions.
