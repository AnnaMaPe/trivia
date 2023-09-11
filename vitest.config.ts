import { fileURLToPath } from 'node:url'
import { defineConfig, mergeConfig } from 'vite'
import { configDefaults } from 'vitest/config'
import viteConfig from './vite.config'

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      setupFiles: './src/setupTests.ts',
      include: ['./src/**/*.spec.{ts,tsx}'],
      globals: true,
      coverage: {
        provider: 'c8',
        reporter: ['lcov', 'text'],
        all: true,
        src: ['src']
      },
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      transformMode: {
        web: [/\.[jt]sx$/]
      }
    }
  })
)
