/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_API_URL: string;
    VITE_POST_URL: string;
}

interface ImportMeta {
    env?: ImportMetaEnv;
}