/// <reference types="astro/client" />

type ENV = {
  EXAMPLE_VARIABLE: string;
};

type Runtime = import("@astrojs/cloudflare").Runtime<ENV>;
declare namespace App {
  interface Locals extends Runtime { }
}

type AppContext = Context<{ Bindings: Env }>;