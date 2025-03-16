<template>
  <main class="flex flex-row gap-4 justify-center items-center w-screen h-auto transition-colors duration-300 to-green-300 from-pink-200 hover:to-pink-200 flex-wrap hover:from-green-400 bg-gradient-to-b">
    <div class="flex flex-col justify-center items-center mt-5 ">
     <p class=" scale-200 mb-10 flex max-[480px]:scale-100 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)] font-bold flex-row">Random funny pictures I found on my pc</p>
     <div class="flex gap-4 mb-5">
       <label><input class="mx-2" type="radio" value="lgtv" v-model="selectedpic">Lgtv</label>
        <label><input class="mx-2" type="radio" value="finalfantasy" v-model="selectedpic">finalfantasy</label>
        <label><input class="mx-2" type="radio" value="hairgel" v-model="selectedpic">hairgel</label>
     </div>
    <div class="flex flex-row w-screen h-auto justify-center items-center mb-5">
      <div class="group flex flex-col gap-2 border-blue-500 border-1 bg-blue-300 w-1/3 h-auto hover:h-auto hover:w-1/3 max-[480px]:w-screen items-center hover:border-red-500 hover:border-2 hover:bg-red-300 rounded-xl" v-if="selectedpic == 'lgtv'">
        <img :src="pic1.image" class="w-auto h-68 pt-2 hover:w-auto group-hover:h-auto max-[480px]:h-auto">
         <p class="text-black text-xl">{{ pic1.name }}</p>
      </div>

      <div class="group flex flex-col gap-2 border-blue-500 border-1 bg-blue-300 w-1/3 h-auto hover:h-auto hover:w-1/3 max-[480px]:w-screen items-center hover:border-red-500 hover:border-2 hover:bg-red-300 rounded-xl" v-if="selectedpic == 'finalfantasy'">
        <img :src="pic2.image" class="w-auto h-68 pt-2 hover:w-auto group-hover:h-auto max-[480px]:h-auto">
         <p class="text-black text-xl">{{ pic2.name }}</p>
      </div>

      <div class="group flex flex-col gap-2 border-blue-500 border-1 bg-blue-300 w-1/3 h-auto hover:h-auto hover:w-1/3 max-[480px]:w-screen items-center hover:border-red-500 hover:border-2 hover:bg-red-300 rounded-xl" v-if="selectedpic == 'hairgel'">
        <img :src="pic3.image" class="w-auto h-68 pt-2 hover:w-auto group-hover:h-auto max-[480px]:h-auto ">
         <p class="text-black text-xl">{{ pic3.name }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 max-[480px]:grid-cols-1 w-screen h-auto gap-4 flex-row">
      <div class="group hover:z-100 flex flex-col origin-center w-auto gap-2 border-blue-500 border-1 hover:scale-105 hover:w-auto transition hover:h-auto bg-blue-300 h-auto items-center hover:border-yellow-500 hover:border-4 hover:bg-yellow-300 rounded-xl" v-for="(pic, index) in genpic" :key="index">
          <img :src="pic.image" class=" w-auto h-68 pt-2 group-hover:w-auto focus:w-auto focus:h-auto group-hover:h-auto max-[480px]:h-auto">
        <p class="text-black  text-xl">{{ pic.name }}</p>
     </div>
    </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

interface stking {
  name: string
  image: any
}

const pic1 = reactive<stking>({
  name: 'pic1',
  image: "/img/lgbtq.jpg"
})
const pic2 = reactive<stking>({
  name: 'pic2',
  image: '/img/finalfantasy.jpg'
})
const pic3 = reactive<stking>({
  name: 'pic3',
  image: '/img/hairgel.jpg'
})

const genpic = reactive<stking[]>([
  {name: 'tome', image: "/img/tome.jpg"},
  {name: '10yearchallenge', image: "/img/10yearchallenge.jpg"},
  {name: 'kiryu', image: "img/kiryu.jpg"},
  {name: 'continue', image: "/img/continue.jpg"},
  {name: 'muzhik', image: "/img/muzhik.jpg"},
  {name: 'naruto', image: "/img/naruto.jpg"},
  {name: 'persona', image: "/img/persona.jpg"},
  {name: 'avatarka', image: "/img/avatarka.jpg"},
  {name: 'osu', image: "/img/osu.jpg"}])



const selectedpic = ref<string>('')

</script>

<style scoped>
  /*.blockcap {
    @apply flex flex-col gap-2 border-blue-500 border bg-blue-300 w-72 h-auto items-center hover:border-red-500 hover:border-4 hover:bg-red-300 rounded-xl
  }
  .blockfor {
    @apply flex flex-col gap-2 border-blue-500 border bg-blue-300 w-72 h-auto items-center hover:border-yellow-500 hover:border-4 hover:bg-yellow-300 rounded-xl
  }*/
</style>