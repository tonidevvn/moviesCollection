/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DBMOVIES_READ_ACCESS_TOKEN: string;
  // more env variables...
  readonly VITE_API_Key: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
