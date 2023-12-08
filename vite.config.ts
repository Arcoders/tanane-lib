import react from '@vitejs/plugin-react'
import { defineConfig as vitestConfig } from 'vitest/config'
import path from "path";
import dts from 'vite-plugin-dts'
import { defineConfig } from "vite";

export default vitestConfig({
	plugins: [react()],
  resolve: {
    alias: {
      'tanane-lib-ui': path.resolve(__dirname, 'packages/ui/src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "../styles";`

      },
    },
  },
	test: {
		globals: true,
		environment: 'jsdom',
	  }
})

const isExternal = (id: string) => !id.startsWith(".") && !path.isAbsolute(id);


export const getBaseConfig = ({ plugins = [], lib }) =>
  defineConfig({
    plugins: [react(), dts({ rollupTypes: true }), ...plugins],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "../styles";`
        },
      },
    },
    build: {
      lib,
      rollupOptions: {
        external: isExternal,
        output: {
          entryFileNames: 'main.js',
          globals: {
            react: "React",
          },
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      }
  });

