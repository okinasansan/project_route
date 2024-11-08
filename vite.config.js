import { fileURLToPath, URL } from 'node:url';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  // HTML内で環境変数を使うためのプラグイン
  const htmlPlugin = () => ({
    name: 'html-transform',
    transformIndexHtml: (html) =>
      html.replace(/%=(.*?)%/g, (match, p1) => env[p1] ?? match),
  });

  return defineConfig({
    plugins: [
      vue(),
      htmlPlugin(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    server: {
      host: true,
    },
    define: {
      'process.env.VITE_APP_GOOGLEMAP_API': JSON.stringify(env.VITE_APP_GOOGLEMAP_API),
    },
  });
};
