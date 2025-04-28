<template>
    <main class="w-screen h-screen flex flex-col items-center justify-center from-purple-900 bg-gradient-to-br to-red-900 m-[-2px]">
        <p class="textshadow text-2xl mb-5">Practice using Pinia</p>
    <fieldset class="flex flex-col border-4 border-green-600 w-auto h-auto items-center justify-center rounded-2xl shadow-2xl bg-white p-4">
   
       
        <div class="flex gap-4 mb-5">
       <label v-for="item in engStore.eng" :key="item.id">
           <input class="mx-2" type="radio" :value="item.name" v-model="selectus"> {{ item.name }}
       </label>
        
     </div>

        <div class="flex flex-col" v-if= "selectus == 'Arslan Ash'">
            <Arslan />   
        </div>
        <div class="flex flex-col" v-if= "selectus == 'Knee'">
            <Knee />   
        </div>
        <div class="flex flex-col" v-if= "selectus == 'JDCR'">
            <JDCR />   
        </div>
        <div class="flex flex-col" v-if= "selectus == 'Kkokkoma'">
            <Kkokkoma />   
        </div>
        <div class="flex flex-col" v-if= "selectus == 'Joka'">
            <Joka />   
        </div>
    </fieldset>
</main>
</template>
<script setup lang="ts">
import {ref} from "vue"
import { useEngStore } from '@/stores/eng'

const engStore = useEngStore()

const filtering = computed(() => {
    return engStore.eng.filter(club => club.name == 'Arslan Ash')
    })
const selectus = ref<string>('Arslan Ash')

</script>
