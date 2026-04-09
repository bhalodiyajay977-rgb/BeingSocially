import { defineConfig } from 'vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const src = path.resolve(__dirname, 'src');

export default defineConfig({
	esbuild: {
		jsx: 'automatic',
	},
	resolve: {
		alias: [
			{ find: '@/components', replacement: path.resolve(src, 'component') },
			{ find: '@/pages', replacement: path.resolve(src, 'component/page') },
			{ find: '@/hooks', replacement: path.resolve(src, 'component/hooks') },
			{ find: '@/lib', replacement: path.resolve(src, 'component/lib') },
			{ find: '@/index.css', replacement: path.resolve(src, 'component/index.css') },
			{ find: '@', replacement: src },
		],
	},
});
