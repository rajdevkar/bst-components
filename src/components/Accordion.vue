<template>
  <div class="relative flex flex-col border md:border-0 border-neutral-350 rounded-sm">
    <div @click.self="isOpen = !isOpen;openOptionsMenu = false"
         class="flex justify-between bg-neutral-800 hover:bg-neutral-900 px-4 md:px-8 py-4 cursor-pointer transition-all duration-150 ease-in-out"
         :class="{'!bg-neutral-900 border-b md:border-b-0 border-neutral-350': isOpen}">
      <div class="flex items-center space-x-4 font-semibold">

        <svg @click="openOptionsMenu = !openOptionsMenu" width="24px" height="24px">
          <use xlink:href="/assets/svg/hamburger-menu.svg#svg"></use>
        </svg>

        <transition enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95">
          <div
              v-if="openOptionsMenu"
              class="absolute left-0 top-12 z-10 mt-2 w-56 origin-top-right rounded-sm bg-neutral-800 border border-neutral-350 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
            <div class="py-1" role="none">
              <a href="#"
                 class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Move
                Up</a>
              <a href="#"
                 class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Move
                Down</a>
              <a href="#"
                 class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Delete
              Block</a>
              <a href="#"
                 class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Move
                to another day</a>
              <a href="#"
                 class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Copy
                to another day</a>
            </div>
          </div>
        </transition>

        <div class="group flex items-center space-x-4">
          <span @click="changeBlockName = true" :contenteditable="changeBlockName" class="max-w-[220px] md:max-w-md"
                :class="{'bg-white text-neutral-800 rounded-sm px-3 -mx-3 py-1.5 -my-1.5 focus:outline-none':
                changeBlockName, 'truncate': !changeBlockName}"
          >
            {{ label ?? 'Name Block' }}
          </span>
          <svg width="16px" height="16px" class="hidden group-hover:block" v-if="!changeBlockName"
               @click="changeBlockName = true">
            <use xlink:href="/assets/svg/pencil.svg#svg"></use>
          </svg>
          <svg width="20px" height="20px" v-if="changeBlockName" @click="changeBlockName = false">
            <use xlink:href="/assets/svg/tick.svg#svg"></use>
          </svg>
        </div>
      </div>
      <svg @click="isOpen = !isOpen" width="24px" height="24px"
           class="-rotate-90 transition-all duration-150 ease-in-out" :class="{'!rotate-90': isOpen}">
        <use xlink:href="/assets/svg/chevron.svg#svg"></use>
      </svg>
    </div>
    <div class="bg-neutral-800" :class="{'hidden': !isOpen}">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

defineProps({
  label: String
})

const isOpen = ref(false);
const openOptionsMenu = ref(false);
const changeBlockName = ref(false);
</script>
