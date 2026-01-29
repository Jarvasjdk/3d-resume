import { defineConfig } from 'vite';

export default defineConfig({
    base: '/3d-resume/',
    build: {
        rollupOptions: {
            output: {
                manualChunks: {
                    three: ['three'],
                    gsap: ['gsap'],
                }
            }
        }
    }
});
