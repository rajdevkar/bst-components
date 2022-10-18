<template>
  <div class="text-gray-700 text-xs text-center px-2 md:px-4 lg:px-6 py-2 xl:py-3">{{ value }}</div>
</template>

<script setup>
defineProps({
  value: String
})
</script>
