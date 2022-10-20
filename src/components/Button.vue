<template>
  <button
      class="flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4"
      :class="outline ? 'hover:bg-gold-550 border border-gold-550 text-gold-550 hover:text-neutral-800 py-[7px] transition-all duration-150 ease-in-out' : 'bg-gold-550 text-neutral-800 py-2'"
  >
    <slot name="icon" />
    <span><slot /></span>
  </button>
</template>

<script setup>
defineProps({
  outline: Boolean
})
</script>
