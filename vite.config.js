import { defineConfig } from "vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	//base: "/",
	mode: "production",
	build: {
		brotliSize: false,
		manifest: false,
		sourcemap: false, //'inline'
		minify: "terser",
		publicDir: "public/",
		outDir: "dist/",
		rollupOptions: {
			external: [
				"**/*.mp4",
				"**/*.ogv",
				"**/*.ogg",
				"**/*.webm",
				"**/*.gltf",
				"**/*.glb",
				"**/*.drc",
				"**/*.ktx2",
				"**/*.bin",
			],
			output: {
				assetFileNames: "src/assets/[ext]/[hash][extname]",
				chunkFileNames: "src/assets/js/[hash].[format].js",
				entryFileNames: "src/assets/js/[hash].[format].js",
			},
		},
	},
	resolve: {
		extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json", ".vue"],
		alias: [
			{
				find: "@",
				replacement: path.resolve(__dirname, "./src"),
			},
		],
	},
	optimizeDeps: {
		exclude: ["worker"],
	},
	plugins: [],
});
