<template>
  <div class="flex flex-col">
    <div @click="isOpen = !isOpen" class="flex justify-between bg-neutral-800 px-8 py-4 cursor-pointer" :class="{'bg-neutral-900': isOpen}">
      <div class="flex items-center space-x-4 font-semibold">
        <svg width="24px" height="24px">
          <use xlink:href="/assets/svg/hamburger-menu.svg#svg"></use>
        </svg>
        <span>{{label}}</span>
      </div>
      <svg width="24px" height="24px" class="-rotate-90 transition-all duration-150 ease-in-out" :class="{'!rotate-90': isOpen}">
        <use xlink:href="/assets/svg/chevron.svg#svg"></use>
      </svg>
    </div>
    <div class="bg-neutral-800 px-8 pt-4 pb-8" :class="{'hidden': !isOpen}">
      <slot />
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

defineProps({
  label: String
})

const isOpen = ref(false);
</script>
