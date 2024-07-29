import { readFileSync } from "fs";
import path from "path";
import react from "@vitejs/plugin-react-swc";
import dotenv from "dotenv";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";

enum Mode {
	DOCKER = "docker",
	STAGE = "stage",
	PRODUCTION = "production",
}

dotenv.config({ path: "../../.env" });

export default defineConfig(() => {
	return {
		server: {
			host: "0.0.0.0",
		},
		plugins: [
			visualizer(),
			react(),
			svgr(),
		],
		resolve: {
			alias: [{ find: "@", replacement: "/src" }],
		},
		envDir: "../../",
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: readFileSync(path.resolve("src/shared/scss/tools/index.scss"), {
						encoding: "utf8",
						flag: "r",
					}),
				},
			},
		},
		define: {
			__IS_DEV__: JSON.stringify(true),
			__API__: JSON.stringify(""),
		},
	};
});
