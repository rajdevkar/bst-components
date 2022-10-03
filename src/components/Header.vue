<template>
    <nav class="bg-neutral-800 border-b border-neutral-300 p-4">
        <button @click="emit('toggleSidebar')" class="flex items-center text-white"> <!-- emit('toggleSidebar') this function will emit a action outside this component called "toggleSidebar" -->
            <svg width="24px" height="24px">
              <use xlink:href="/assets/svg/toggle.svg#svg"></use>
            </svg>
        </button>
    </nav>
</template>

<script setup>
const emit = defineEmits(['toggleSidebar']);
</script>
