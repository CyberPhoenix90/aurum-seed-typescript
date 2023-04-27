import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    root: './client',
    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true
            },
            '/socket': {
                target: 'ws://localhost:3000',
                ws: true
            }
        }
    }
});
