import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vite';
import * as path from 'path';

export default defineConfig({
    root: "src/gui/",
    plugins: [tsconfigPaths()],
    resolve: {
        alias: {
            '@src': path.resolve(__dirname, 'src')
        }
    }
})