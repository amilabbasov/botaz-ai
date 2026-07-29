/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly SITE_OVERRIDE?: string;
  readonly ROBOTS?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}