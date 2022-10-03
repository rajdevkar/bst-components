<template>
  <nav class="flex bg-neutral-800 text-white border-b border-neutral-300 max-h-20">
    <div class="flex items-center w-64 pl-4 py-4">
      <button @click="emit('toggleSidebar')" class="flex items-center text-white">
        <!-- emit('toggleSidebar') this function will emit a action outside this component called "toggleSidebar" -->
        <svg width="24px" height="24px">
          <use xlink:href="/assets/svg/toggle.svg#svg"></use>
        </svg>
      </button>
      <a href="/" class="h-10 ml-4">
        <img src="/assets/svg/logo.svg"/>
      </a>
    </div>
    <div class="flex flex-1 items-center justify-end lg:justify-between p-4">
      <div class="hidden lg:flex flex-col">
        <span class="font-semibold">Training Calendar</span>
        <span class="text-xs opacity-80">Create exercise plans according to the calendar for specific groups</span>
      </div>
      <div class="flex items-center space-x-6">
        <svg width="24px" height="24px">
          <use xlink:href="/assets/svg/notification.svg#svg"></use>
        </svg>
        <div class="flex space-x-2">
          <img src="https://ui-avatars.com/api/?name=Rahul+Sulegaokar" class="w-10 h-10 rounded-full"/>
          <div class="hidden md:flex flex-col font-medium">
            <span class="text-sm">Rahul Sulegaokar</span>
            <span class="text-xs opacity-80">rsulegaokar@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
const emit = defineEmits(['toggleSidebar']);
</script>
