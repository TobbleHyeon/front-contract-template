import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
    base: "/",
    assetsInclude: ["**/*.png", "**/*.svg", "**/*.jpg", "**/*.jpeg"],
    plugins: [react(), nodePolyfills(), svgr()],
    server: {
        host: true,
        open: true,
        port: 3001,
        fs: {
            cachedChecks: false,
        },
        watch: {
            usePolling: true,
        },
    },
    resolve: {
        alias: {
            http: "rollup-plugin-node-polyfills/polyfills/http",
            https: "rollup-plugin-node-polyfills/polyfills/https",
        },
    },
});
