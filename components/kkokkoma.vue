<template>
    <div>
        <div v-for="item in filtering" :key = "item.id" class = 'flex flex-row gap-4'>
        <img :src=item.img class="w-40 h-70 mb-5">
        <div class="flex flex-col text-xl">
            <p>Player: {{ item.name }}</p>
            <p>Age: {{ item.age }}</p>
            <p>Country: {{ item.country }}</p>
            <p>Characters: {{ item.character }}</p>
            <p>Winnings: {{ item.earnings }}</p>
        </div>
        </div>
    </div>
</template>

<script setup lang = "ts">

import { useEngStore } from '@/stores/eng'
import { ref, computed, onMounted } from 'vue'

const engStore = useEngStore()

const filtering = computed(() => {
    return engStore.eng.filter(club => club.name == 'Kkokkoma')
    })

</script>