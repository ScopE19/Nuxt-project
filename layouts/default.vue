
<script setup>
import{ref} from 'vue'
import LoginPopup from '~/components/loginpopup.vue'

useHead({
  script: [
    {
      hid: "gtm-script",
      innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id=' + i + dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-KVVMGLDC');`, // Replace with your GTM ID
      type: "text/javascript",
    }
  ],
});

const burger = ref(false)
const showPopup = ref(false)
const popupMessage = ref('')
const switch_burger = () => {burger.value = !burger.value}

const { signOut, status} = useAuth()
const log_check = computed(() => status.value === 'authenticated')
const data = await useFetch('/api/me')
</script>

<template class="bg-red-500">
  <!-- Google Tag Manager (noscript) -->
  <noscript>
      <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KVVMGLDC"
      height="0" width="0" style="display:none;visibility:hidden"></iframe>
    </noscript>
    <!-- End Google Tag Manager (noscript) -->
    <header class = "flex flex-row w-full bg-green-900 border-b-2 border-gray-400 max-[480px]: justify-between max-[480px]:relative ">
        <div class = "basis-1/4 items-counter justify-start px-8 min-w-40 max-[480px]:basis-auto">
            <img src="assets/images/kuritsa.webp" class = "w-16 h-16 m-1 bg-transparent">
        </div>
        <div class = "basis-1/4 max-sm:basis-auto">
        </div>
        <nav :class = "{'basis-1/2 flex flex-row items-center justify-end px-4 z-100 gap-4': !burger || burger, 'max-[480px]:basis-auto max-[480px]:absolute max-[480px]:top-full max-[480px]:w-full max-[480px]:justify-center max-[480px]:flex-col max-[480px]:gap-0 max-[480px]:bg-white max-[480px]:px-0': burger,
         'max-[480px]:hidden': !burger}">
            <NuxtLink to = "/" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center">Home</NuxtLink>
            <div class="group my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover:text-white  max-[480px]:w-full max-[480px]:border-t-2 max-[480px]:text-center font-bold relative">Labs
              <div class="opacity-0 group-hover:flex group-hover:opacity-100 flex-col top-full bg-white text-black w-56 text-center max-[480px]:opacity-100 max-[480px]:flex max-[480px]:relative max-[480px]:w-full  max-[480px]:z-100 absolute border-2 ">
                <NuxtLink to = "/Lab3" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center border-2">Lab3</NuxtLink>
                <NuxtLink to = "/Lab4" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center border-2">Lab4</NuxtLink>
                <NuxtLink to = "/Lab5" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center border-2">Lab5</NuxtLink>
                <a href="#" @click.prevent="() => {
                if (status === 'authenticated') {
                  navigateTo('/Lab6')
                  console.log('authenticated123')
                } else {
                  popupMessage = 'You are not authorized'
                  showPopup = true
                  
                }
                  }" class="font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center border-2">Lab6</a>
              </div>
            </div>
            
            <LoginPopup  />
            <div class="p-2 rounded-md hover:bg-gray-500 hover:text-yellow-30 font-bold" @click="signOut()">Logout</div>
            <img :src="data?.user?.image" v-show = "log_check" class="w-14 h-14 border-2 border-black rounded-full">
        </nav>
        <div v-if="showPopup" class="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
  <div class="bg-white text-black p-4 rounded shadow-md">
    <p class="mb-4">{{ popupMessage }}</p>
    <button
      @click="showPopup = false"
      class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Close
    </button>
  </div>
</div>
        <div v-if = "!burger" @click = "switch_burger" class="max-[480px]:flex max-[480px]:flex-col max-[480px]:mr-8 max-[480px]:mt-6 max-[480px]:justify-between max-[480px]:items-center max-[480px]:w-8 max-[480px]:h-6">
          <span class="h-[3px] w-full bg-black"></span>
          <span class="h-[3px] w-full bg-black"></span>
          <span class="h-[3px] w-full bg-black"></span>
        </div>
        <div v-else @click = "switch_burger" class="max-[480px]:flex max-[480px]:flex-col max-[480px]:mr-8 max-[480px]:mt-6 max-[480px]:justify-between max-[480px]:items-center max-[480px]:w-8 max-[480px]:h-6">
          <span class="h-[3px] w-full bg-black rotate-45 relative top-[9px]"></span>
          <span class="h-[3px] w-full bg-black opacity-0"></span>
          <span class="h-[3px] w-full bg-black rotate-135 relative bottom-3"></span>
        </div>
    </header>
    <main class="bg-green-100 h-auto">
        <slot /> 
    </main>
    <footer class = "flex flex-row w-full bg-green-400 border-t-2 border-gray-400 items-center justify-center px-4 py-2 gap-4">
        <a href="https://www.youtube.com/"> <img src="assets/images/youtube.png" class="w-16 h-16"></a>
        <a href="https://github.com/ScopE19"> <img src="assets/images/git.png" class="w-16 h-16"></a>
        <a href="https://steamcommunity.com/id/Numb_digger/"> <img src="assets/images/steam.png" class="w-16 h-16"></a>    
    </footer>
</template>

<style scoped>

</style>
