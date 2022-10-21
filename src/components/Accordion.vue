<template>
  <div class="flex flex-col border md:border-0 border-neutral-350 rounded-sm overflow-hidden">
    <div @click.self="isOpen = !isOpen" class="flex justify-between bg-neutral-800 hover:bg-neutral-900 px-4 md:px-8 py-4 cursor-pointer transition-all duration-150 ease-in-out" :class="{'bg-neutral-900 border-b md:border-b-0 border-neutral-350': isOpen}">
      <div class="flex items-center space-x-4 font-semibold">
        <svg @click="isOpen = !isOpen" width="24px" height="24px">
          <use xlink:href="/assets/svg/hamburger-menu.svg#svg"></use>
        </svg>
        <div class="group flex items-center space-x-4">
          <span @click="changeBlockName = true" :contenteditable="changeBlockName"
            :class="{'bg-white text-neutral-800 rounded-sm px-3 -mx-3 py-1.5 -my-1.5 focus:outline-none': changeBlockName}"
          >
            {{label ?? 'Name Block'}}
          </span>
          <svg width="16px" height="16px" class="hidden group-hover:block" v-if="!changeBlockName" @click="changeBlockName = true">
            <use xlink:href="/assets/svg/pencil.svg#svg"></use>
          </svg>
          <svg width="20px" height="20px" v-if="changeBlockName" @click="changeBlockName = false">
            <use xlink:href="/assets/svg/tick.svg#svg"></use>
          </svg>
        </div>
      </div>
      <svg @click="isOpen = !isOpen" width="24px" height="24px" class="-rotate-90 transition-all duration-150 ease-in-out" :class="{'!rotate-90': isOpen}">
        <use xlink:href="/assets/svg/chevron.svg#svg"></use>
      </svg>
    </div>
    <div class="bg-neutral-800" :class="{'hidden': !isOpen}">
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
const changeBlockName = ref(false);
</script>
