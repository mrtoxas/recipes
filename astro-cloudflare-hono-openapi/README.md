# Example of an Astro SSR project on Cloudflare with an API endpoint using Hono and Chanfana (OpenAPI)

This project demonstrates how to create a self-documented API within Astro. Unlike standard Astro endpoints, which by default do not have built-in validation, types, and documentation, this bundle (Hono + Chanfana) automates schema description and data validation. At the same time, full access to Cloudflare Runtime and environment variables is preserved.

##  What tasks does it solve?
- Auto-documentation: An interactive Swagger/Scalar UI is generated automatically from your code.
- Zod-powered Validation: Uses Zod to strictly validate incoming data and reject malformed requests before they reach your logic.
- Cloudflare Runtime Access: Seamless access to environment variables, KV, and D1 through the Hono context.
- Type Safety: Full TypeScript support for inputs and outputs, eliminating "undefined" errors and typos.
- Modular Design: Clear separation between OpenAPI schemas (classes) and functional business logic.

⚠️ The repo contains a minimal implementation and a concise usage example. For production use, consider adding validation of environment variables and proper error logging.

## Getting Started
```bash
# Clone this project
npx degit mrtoxas/recipes/astro-cloudflare-hono-openapi astro-cloudflare-hono-openapi
cd astro-cloudflare-hono-openapi

# Install dependencies
pnpm install

# Generate Cloudflare types
pnpm wrangler types

# Start dev server
pnpm dev
```

## API Documentation
Once the server is running, you can access the interactive API documentation at:
- Swagger UI: http://localhost:4321/api/docs
- OpenAPI Spec (JSON): http://localhost:4321/api/openapi.json