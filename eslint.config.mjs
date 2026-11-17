import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Next 15's compatibility parser lacks metadata required by ESLint 9's
// configuration serialization during production builds.
const eslintConfig = compat.extends("next/core-web-vitals").map((config) => {
  const parser = config.languageOptions?.parser;
  if (!parser || parser.meta) return config;

  return {
    ...config,
    languageOptions: {
      ...config.languageOptions,
      parser: {
        ...parser,
        meta: { name: "eslint-config-next/parser", version: "15.1.2" },
      },
    },
  };
});

export default eslintConfig;
