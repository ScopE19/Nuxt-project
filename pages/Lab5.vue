
<template>
    <main class="flex flex-col items-center gap-4 p-12 justify-center min-h-screen items-counter from-purple-900 bg-gradient-to-br to-red-900 flex-wrap">

        <NuxtLink to = "/" class="text-2xl textshadow justify-center items-center"> previous tab</NuxtLink>
        <label for="select"></label>
        <select class="textshadow" id="select" v-model = "selectus">
            <option value="kazuya">kazuya</option>
            <option value="feng">feng</option>
            <option value="lili">lili</option>
            <option value="brian">brian</option>
            <option value="king">king</option>
        </select>
    
        <div class="flex flex-col" v-if= "selectus == 'kazuya'">
            <kazuya />   
        </div>
        <div class="flex flex-col" v-if= "selectus == 'feng'">
            <feng />   
        </div>
        <div class="flex flex-col" v-if= "selectus == 'lili'">
            <lili />   
        </div>
        <div class="flex flex-col" v-if= "selectus == 'brian'">
            <brian />   
        </div>
        <div class="flex flex-col" v-if= "selectus == 'king'">
            <king />   
        </div>
        <fieldset class="border-2 flex items-center flex-col border-black shadow-2xl shadow-black rounded-l p-4 m-10">
            <p class="textshadow mb-5 ">Options are: kazuya, feng, lili, king, brian</p>
        <input class = "bg-white w-fit mb-5" name = "filter" v-model = "search" placeholder="find up me">
        <div v-for="(image, index) in finder" :key = "index">
            <video controls width="600" height="400" :src = image.image></video>
        </div>
        </fieldset>
        <fieldset class="border-2 border-black shadow-2xl shadow-black rounded-l p-4">
        <form class="flex flex-row gap-4 textshadow">
            <div class="flex flex-col">
                <label for="first">Put in the first number</label>
                <input class="bg-white mb-5 text-black " type= "number" name="first" v-model="first">
            </div>
            <div class="flex flex-col">
                <label for="second">Put in the first number</label>
                <input class="bg-white mb-5 text-black" type= "number" name="second" v-model="second">
            </div>
        </form>
            <div class="flex flex-row gap-4">
                <button @click="set_sign('*')" class="text-3xl bg-blue-950 text-white min-w-16 h-16 rounded-xl hover:bg-blue-300 hover:text-black border-2 border-black">*</button>
                <button @click="set_sign('/')" class="text-3xl bg-blue-950 text-white min-w-16 h-16 rounded-xl hover:bg-blue-300 hover:text-black border-2 border-black">/</button>
                <button @click="set_sign('+')" class="text-3xl bg-blue-950 text-white min-w-16 h-16 rounded-xl hover:bg-blue-300 hover:text-black border-2 border-black">+</button>
                <button @click="set_sign('-')" class="text-3xl bg-blue-950 text-white min-w-16 h-16 rounded-xl hover:bg-blue-300 hover:text-black border-2 border-black">-</button>
            </div>
            <p class = "text-xl textshadow">Result is {{ calc }}</p>
        </fieldset>
        </main>
    </template>
<script setup lang="ts">
    import {ref, computed, reactive} from "vue"
    interface stking {
        name: string
        image: string
    }

    const selectus = ref<string>('kazuya')
    const search = ref<string>('kazuya')
    const first = ref<number>(0)
    const second = ref<number>(0)
    const sign = ref<string>('')


    const filtering = reactive<stking[]>([
        {name: 'kazuya', image: '/img/kazuyara.mp4'},
        {name: 'feng', image: '/img/fengra.mp4'},
        {name: 'lili', image: '/img/lilira.mp4'},
        {name: 'king', image: '/img/kingra.mp4'},
        {name: 'brian', image: '/img/brianra.mp4'},
    ])
    const finder = computed(() => {
        return filtering.filter(img => img.name == search.value)
    }
    )
    const set_sign = (op: string) => {
        sign.value = op
    }

    const calc = computed(():number => {
        switch(sign.value) {
            case "*":
                return first.value * second.value
            case "/":
                try {
                    return parseFloat((first.value / second.value).toFixed(1))
                } catch (error) {
                    console.log('not null')
                }
            case "+":
                return first.value + second.value
            case "-":
                return first.value - second.value
            default:
                return 0
        }
    })
</script>