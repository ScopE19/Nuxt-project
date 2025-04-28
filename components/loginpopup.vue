<template>
    <div class="flex flex-col p-4 relative">
      <!-- Trigger button -->
      <div
        class="font-bold my-auto p-2 hover:bg-gray-500 hover:scale-125 max-[480px]:w-full max-[480px]:border-b-2 max-[480px]:border-black max-[480px]:text-center"
        @click="showPopup = true"
      >
        LogIn
    </div>
  
      <!-- Popup Modal -->
      <div
        v-if="showPopup"
        class="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] flex items-center justify-center z-50"
      >
        <div class="bg-white p-8 rounded-xl shadow-xl text-center">
            <div @click="confirmSignIn" class = "flex flex-col p-4 rounded-lg">
        <button class = 'rounded-xl bg-green-500 min-w-[250px] h-[60px] text-black font-bold flex flex-row items-center justify-center hover:text-yellow-500'>
        <img src="/assets/images/git.png" class="mr-2 bg-transparent w-10 h-10">Sign in with GitHub</button>
             </div>   
        
          <button
            class="bg-gray-400 text-white px-6 py-2 rounded-xl hover:bg-gray-600"
            @click="showPopup = false"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  definePageMeta({
    auth: {
      unauthenticatedOnly: false,
    
    },
  })
  
  const { signIn } = useAuth()
  const showPopup = ref(false)
  
  function confirmSignIn() {
    signIn('github', { callbackUrl: '/https://scope191337.netlify.app/' })
    showPopup.value = false
  }
  </script>