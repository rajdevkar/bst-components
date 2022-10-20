<template>
  <input
      class="w-full text-neutral-800 placeholder:text-gray-400 rounded-sm text-sm focus:outline-none px-4 py-2"
      :class="{'border border-gray-200': hasBorder}"
  />
</template>

<script setup>
defineProps({
  hasBorder: Boolean, // defines if input has border or not
})
</script>
