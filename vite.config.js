import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';
import checker from 'vite-plugin-checker';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
import svgr from 'vite-plugin-svgr';

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
        svgr(),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js/src')
        },
    },
    build: {
        commonjsOptions: {
            transformMixedEsModules: true
        },
        rollupOptions: {
            onwarn(warning, warn) {
                if (warning.code === 'MODULE_LEVEL_DIRECTIVE') return;
                warn(warning);
            }
        },
        // Disable type checking during build
        typescript: {
            typeCheck: false
        }
    },
    esbuild: {
        loader: 'tsx',
        include: /\.[jt]sx?$/,
    },
    optimizeDeps: {
        include: ['react', 'react-dom', 'react-router-dom', '@mui/material', 'echarts', 'echarts-for-react']
    },
});
