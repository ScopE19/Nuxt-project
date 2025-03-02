
<script setup>
import{ref} from 'vue'

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

const switch_burger = () => {burger.value = !burger.value}

</script>

<template>
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
        <nav :class = "{'basis-1/2 flex flex-row items-center justify-end px-4 gap-4': !burger || burger, 'max-[480px]:basis-auto max-[480px]:absolute max-[480px]:top-full max-[480px]:w-full max-[480px]:justify-center max-[480px]:flex-col max-[480px]:gap-0 max-[480px]:bg-white max-[480px]:px-0': burger,
         'max-[480px]:hidden': !burger}">
            <NuxtLink to = "/" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center">Home</NuxtLink>
            <div class="my-auto p-2 border-b-2 border-black hover:bg-gray-500 hover:text-white max-[480px]:w-full max-[480px]:border-t-2 max-[480px]:text-center font-bold">Labs
              <div class="flex flex-col absolute top-full bg-white text-black w-56 text-center max-[480px]:relative max-[480px]:w-full max-[480px]:bg-red-100">
                <NuxtLink to = "/Lab3" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center">Lab3</NuxtLink>
                <NuxtLink to = "/Lab4" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center">Lab4</NuxtLink>
                <NuxtLink to = "/Lab5" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center">Lab5</NuxtLink>
                <NuxtLink to = "/Lab6" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center">Lab6</NuxtLink>
              </div>
            </div>
            <NuxtLink to = "/login" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center">LogIn</NuxtLink>
            <NuxtLink to = "/logout" class = "font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center" >LogOut</NuxtLink>
        </nav>
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
    <main class="p-5 flex bg-green-100 h-screen">
        <slot /> 
    </main>
    <footer class = "flex flex-row w-full bg-green-400 border-t-2 border-gray-400 items-center justify-center px-4 py-2 gap-4">
        <a href="https://www.youtube.com/"> <img src="assets/images/youtube.png" class="w-[64px] h-16"></a>
        <a href="https://www.youtube.com/"> <img src="assets/images/youtube.png" class="w-16 h-16"></a>
        <a href="https://www.youtube.com/"> <img src="assets/images/youtube.png" class="w-16 h-16"></a>    
    </footer>
</template>

