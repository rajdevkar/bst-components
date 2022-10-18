<template>
  <div class="group relative flex flex-col items-center space-y-1 text-sm text-center text-gray-700 px-1 py-2 ease-in-out transition-all duration-300 cursor-pointer"
     :class="{
        'bg-gray-100': lastMonth,
         'bg-emerald-100': event,
     }"
  >

    <div v-if="event" class="opacity-0 group-hover:opacity-100 bg-neutral-800 text-white absolute inset-0 flex flex-col space-y-1 items-center justify-center ease-in-out transition-all duration-400">
      <svg width="20px" height="20px">
        <use xlink:href="/assets/svg/edit.svg#svg"></use>
      </svg>
      <span class="hidden lg:block text-xs font-medium">EDIT PLAN</span>
    </div>
    <div v-else class="opacity-0 group-hover:opacity-100 bg-gold-550 text-neutral-800 absolute inset-0 flex flex-col space-y-1 items-center justify-center ease-in-out transition-all duration-400">
      <svg width="24px" height="24px" class="bg-gold-550">
        <use xlink:href="/assets/svg/plus.svg#svg"></use>
      </svg>
      <span class="hidden lg:block text-xs font-medium">CREATE PLAN</span>
    </div>

    <span>{{value}}</span>
    <span class="hidden md:block text-xs font-medium">{{ event ? 'Plan Created' : '‎' }}</span>
  </div>
</template>

<script setup>
defineProps({
  value: String,
  lastMonth: Boolean,
  event: Boolean,
})
</script>
