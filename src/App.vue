<template>
    <div
        class="flex min-h-screen flex-col items-center bg-slate-800 text-white"
    >
        <nav class="flex h-16 items-center self-stretch bg-slate-700">
            <img src="/logo_w.svg" class="ml-2 h-16" />
            <div class="ml-2 text-xl tracking-wider">Chessalyzer</div>
        </nav>
        <div
            class="m-10 grow self-stretch rounded-sm bg-white p-4 text-gray-800 shadow shadow-gray-100"
        >
            Hello. Lets go.

            <div class="h-80 w-80 border-2 border-gray-800"></div>
        </div>

        <div>Some footer text.</div>

        <button type="button" @click="handleClick">CLICK</button>
    </div>
</template>

<script setup lang="ts">
    console.log(
        '[App.vue]',
        `Hello world from Electron ${process.versions.electron}!`
    )

    async function handleClick() {
        const filePath = await window.electronAPI.openFile()
        console.log(filePath)
    }
</script>

<style></style>
