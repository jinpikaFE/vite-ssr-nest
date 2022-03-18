import react from '@vitejs/plugin-react';
import ssr from 'vite-plugin-ssr/plugin';
const config = {
    plugins: [react(), ssr()],
};
export default config;
