<template>
    <main class="w-screen h-screen flex flex-col items-center justify-center from-purple-900 bg-gradient-to-br to-red-900 m-[-2px]">
        <p class="text-2xl textshadow">Welcome to my website</p>
    </main>
</template>
<script setup>
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    globalMiddleware: true,
  },
})
</script>