<template>
    <div class = " h-screen w-screen flex flex-col p-4">
      <h1 class="text-2xl font-bold">This page is available only for authorized users</h1>
    </div>   

</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'sidebase-auth'
})
</script>