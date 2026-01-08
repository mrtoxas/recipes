import { Hono } from 'hono';
import { fromHono } from 'chanfana';
import type { APIRoute } from 'astro';
import { ExampleGetEndpoint } from 'src/api/endpoints/exampleGet';
import { ExamplePostEndpoint } from 'src/api/endpoints/examplePost';

const app = new Hono<{ Bindings: Env }>();

const openapi = fromHono(app, {
  docs_url: "/api/docs",
  openapi_url: "/api/openapi.json",
});

openapi.get('/api/example', ExampleGetEndpoint);
openapi.post('/api/example', ExamplePostEndpoint);

export const ALL: APIRoute = async ({ request, locals }) => {
  const response = await app.fetch(request, locals.runtime.env);
  if (!response) {
    return new Response("Hono returned nothing", { status: 500 });
  }
  return response;
};