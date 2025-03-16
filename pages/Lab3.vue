<template>
    <p class=" scale-200 mb-10 flex max-[480px]:scale-100 drop-shadow-[0_1.2px_1.2px_rgba(255,255,255)] font-bold flex-row">Random videos from my liked playlist</p>
    <div class="flex flex-col items-center space-y-4">
      <div class="flex space-x-4">
        <label v-for="(video, index) in videos" :key="index" class="flex items-center space-x-2">
          <input type="radio" v-model="selectedVideo" :value="video.url" class="hidden peer">
          <span class="cursor-pointer px-4 py-2 rounded-md bg-gray-300 peer-checked:bg-blue-500 peer-checked:text-white">
            {{ video.title }}
          </span>
        </label>
      </div>
  
      <div class="w-2/3 h-[600px] m-5  max-[480px]:w-full  max-[480px]:m-1  max-[480px]:h-[400px]">
        <iframe 
          :src="selectedVideo" 
          class="w-full h-full rounded-lg shadow-lg"
          frameborder="0" 
          allow="autoplay; encrypted-media" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  const videos = ref([
    { title: "Video 1", url: "https://www.youtube.com/embed/MlA9cGBwC7c?si=cFXfgiApy_WgckY0" },
    { title: "Video 2", url: "https://www.youtube.com/embed/kUk9ZIV9BNs?si=xoRx6Y41uu9XW3Pr" },
    { title: "Video 3", url: "https://www.youtube.com/embed/aYwc_6Wy-kE?si=Nii-DI-lGJhU40Ke" },
    { title: "Video 4", url: "https://www.youtube.com/embed/yROLDTA8hkQ?si=yhQ0ssE8_Ap3JN3g" },
    { title: "Video 5", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  ]);
  

  const selectedVideo = ref(videos.value[0].url);
  </script>