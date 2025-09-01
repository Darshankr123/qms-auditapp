type EnvKey = "local" | "dev" | "stage" | "uat" | "prod";

const nextConfig: Record<EnvKey, { HOST_API_KEY: string; ASSETS_API: string }> =
  {
    local: {
      HOST_API_KEY: "https://devapis.akshayakalpa.org",
      ASSETS_API: "http://localhost:4000",
    },
    dev: {
      HOST_API_KEY: "https://devapis.akshayakalpa.org",
      ASSETS_API: "http://admin-dev.akshayakalpa.org",
    },
    stage: {
      HOST_API_KEY: "https://stageapis.akshayakalpa.org",
      ASSETS_API: "https://admin-stage.akshayakalpa.org",
    },
    uat: {
      HOST_API_KEY: "https://uatapis.akshayakalpa.org",
      ASSETS_API: "https://admin-uat.akshayakalpa.org",
    },
    prod: {
      HOST_API_KEY: "https://apis.akshayakalpa.org",
      ASSETS_API: "https://admin.akshayakalpa.org",
    },
  };

const selectedEnv = (process.env.NEXT_PUBLIC_ENV as EnvKey) || "prod";
const environmentConfig = nextConfig[selectedEnv];
const mergedConfig = { ...environmentConfig };

module.exports = {
  swcMinify: false,
  trailingSlash: true,
  env: mergedConfig,
};
