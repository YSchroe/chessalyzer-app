# electron-vite-vue

Based on [electron-vite-vue](https://github.com/electron-vite/electron-vite-vue).

## Problems

-   Renderer Thread cannot use Workers
-   If calc is done in main thread, the tracker object cannot be cloned and returned to the renderer thread
-   import.meta.url can only be used with dynamic await import('chessalyzer.js')
