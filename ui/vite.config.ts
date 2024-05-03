import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: { 'process.env.NODE_ENV': '"development"' },
  build: {
    outDir: '../src/main/resources/',
    lib: {
      entry: {
        'products': resolve(__dirname, 'src/products/Products.tsx'),
        'orders': resolve(__dirname, "src/orders/Orders.tsx"),
        'orders/new': resolve(__dirname, "src/orders/new/OrdersNew.tsx"),
      },
      formats: ['es'],
      fileName: 'static/js/[name]',
    },
    rollupOptions: {
      output: {
        entryFileNames: 'static/js/[name].js',
        chunkFileNames: 'static/js/[name].js',
      },
    },
  },
})
