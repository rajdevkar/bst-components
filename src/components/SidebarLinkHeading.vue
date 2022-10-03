<!-- Sidebar Component -->
<template>
    <span class="text-[10px] font-semibold text-white text-opacity-80 uppercase pt-4 mx-4">
        {{heading}}
    </span>
</template>

<script setup>
    // Props accepted by components
    defineProps({
        heading: String, // heading 
    })
</script>
