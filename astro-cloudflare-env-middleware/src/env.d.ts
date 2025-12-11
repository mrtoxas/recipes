/// <reference types="astro/client" />

type ENV = {
  TEST_VARIABLE: string;  
};

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;
declare namespace App {
	interface Locals extends Runtime {}
}