<template>
    <div class="flex flex-col items-center justify-center">
        <HelloWorld msg="Electron + Vite + Vue" />

        <div>Place static files into the <code>/public</code> folder</div>
        <img
            style="width: 2.4em; margin-left: 0.4em"
            src="/logo.svg"
            alt="Logo"
        />
    </div>
</template>

<script setup lang="ts">
    import HelloWorld from './components/HelloWorld.vue'

    console.log(
        '[App.vue]',
        `Hello world from Electron ${process.versions.electron}!`
    )
</script>

<style></style>
