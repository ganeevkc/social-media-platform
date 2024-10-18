declare interface ImportMetaEnv {
    readonly VITE_API_URL: string;
    readonly VITE_POST_URL: string;
  }
  
declare interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
  