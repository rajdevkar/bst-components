<template>
    <nav class="bg-neutral-500 border-b border-neutral-300 p-4">
        <button @click="emit('toggleSidebar')" class="text-white"> <!-- emit('toggleSidebar') this function will emit a action outside this component called "toggleSidebar" -->
            Click to toggle sidebar
        </button>
    </nav>
</template>

<script setup>
const emit = defineEmits(['toggleSidebar']);
</script>
