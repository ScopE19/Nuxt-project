<template>
    <div class="w-screen h-screen flex">   
        <h1 class="font-bold font text-2xl"> Home page</h1>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    auth: {
        unauthenticatedOnly: false,
        
    },
})
</script>