import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/src/main.tsx'],
            refresh: true,
        }),
        react(),
        checker({
            typescript: true,
            eslint: {
                lintCommand: 'eslint "./resources/js/**/*.{ts,tsx}"',
            },
        }),
        tsconfigPaths(),
    ],
    resolve: {
        alias: {
            '@': '/resources/js/src',
        },
    },
});
