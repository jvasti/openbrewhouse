import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		environment: 'happy-dom',
		setupFiles: ['./vitest-setup.js'],
		include: ['src/**/*.{test,spec}.{js,ts}'],
		coverage: {
			provider: 'v8',
			lines: 100,
			branches: 100,
			functions: 100,
			statements: 100
		}
	}
});
