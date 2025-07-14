import eslintPluginAstro from "eslint-plugin-astro";
import js from "@eslint/js";

export default [
    js.configs.recommended,
    js.configs.recommendedTypeChecked,
    ...eslintPluginAstro.configs.recommended,
    {
        rules: {
            "astro/no-set-html-directive": "error",
        },
    },
];
