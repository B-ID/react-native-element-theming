export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      ENCRYPTION_KEY: string;
      MERCHANT_SECRET_KEY: string;
      MOBILE_DEVELOPMENT_URL: string;
      MOBILE_STAGING_URL: string;
      MOBILE_PRODUCTION_URL: string;
    }
  }
  interface Window {
    hcaptcha?: string;
  }
}
