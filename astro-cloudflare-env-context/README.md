# Astro SSR on Cloudflare Pages: env access via custom AsyncLocalStorage-based context
This repository demonstrates a clean approach to providing request-scoped environment variables in Astro SSR on Cloudflare Pages. It uses a small wrapper around API handlers together with AsyncLocalStorage to create a per-request context. Any part of the server code can then read these variables without prop-drilling or manual forwarding.

⚠️ The repo contains a minimal implementation and a concise usage example. For production use, consider adding:
- Error handling in withServerContext
- Validation of environment variables
- Proper error logging

If you plan to use this setup in your own project, the environment variables are stored in `.dev.vars`. Replace their values as needed, and make sure this file is added to `.gitignore`. If you change a variable’s name, don’t forget to update it in `env.d.ts` as well. 

## Getting Started
```bash
# Clone this project
npx degit mrtoxas/recipes/astro-cloudflare-env-context astro-cloudflare-env-context
cd astro-cloudflare-env-context

# Install dependencies
pnpm install

# Generate Cloudflare types
pnpm wrangler types

# Start dev server
pnpm dev
```

After starting the dev server, open `/api/test` in your browser. The variable will appear on the page and in the server console.

## Deployment notes
Make sure your environment variables are set in Cloudflare Pages (Dashboard → Variables and Secrets) or via `pnpm wrangler pages secret put TEST_VARIABLE`.

## 📖 Learn More
Read the full article on [dev.to](https://dev.to/mrtoxas/access-cloudflare-runtime-env-in-nested-functions-with-astro-ssr-3mn5)