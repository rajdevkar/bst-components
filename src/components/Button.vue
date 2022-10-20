<template>
  <button
      class="flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4"
      :class="outline ? 'hover:bg-gold-550 border border-gold-550 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out' : 'bg-gold-550 text-neutral-800',
              isLarge ? 'py-3' : outline ? 'py-[7px]' : 'py-2'"
  >
    <slot name="icon" />
    <span><slot /></span>
  </button>
</template>

<script setup>
defineProps({
  outline: Boolean, // for deciding to show background color or border color
  isLarge: Boolean, // for deciding button padding
})
</script>
