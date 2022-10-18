<template>
  <div class="group relative flex flex-col items-center space-y-1 text-sm text-center text-gray-700 px-1 py-2 ease-in-out transition-all duration-300 cursor-pointer"
     :class="{
        'bg-gray-100': lastMonth,
         'bg-success': event,
          'hover:bg-gold-550 hover:text-neutral-800': !event
     }"
  >
    <div v-if="!event" class="opacity-0 group-hover:opacity-100 absolute inset-0 py-2 flex flex-col space-y-1 items-center justify-center ease-in-out transition-all duration-400">
      <svg width="24px" height="24px" class="bg-gold-550">
        <use xlink:href="/assets/svg/plus.svg#svg" class="stroke-white group-active:stroke-neutral-800 text-xl"></use>
      </svg>
      <span class="hidden md:block text-xs">CREATE PLAN</span>
    </div>

    <div v-if="event" class="opacity-0 group-hover:opacity-100 bg-neutral-800 text-white absolute inset-0 py-2 flex flex-col space-y-1 items-center justify-center ease-in-out transition-all duration-400">
      <svg width="16px" height="16px">
        <use xlink:href="/assets/svg/edit.svg#svg" class="stroke-white group-active:stroke-neutral-800 text-xl"></use>
      </svg>
      <span class="hidden md:block text-xs">EDIT PLAN</span>
    </div>

    <span>{{value}}</span>
    <span class="hidden md:block text-xs">{{ event ? 'Plan Created' : '‎' }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: String,
  lastMonth: Boolean,
  event: Boolean,
})
</script>
