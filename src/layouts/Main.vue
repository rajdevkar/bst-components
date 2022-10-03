<template>
    <div class="flex flex-col min-h-screen bg-neutral-700">
        <Header @toggleSidebar="toggleSidebar" /> <!-- @toggleSidebar is a action called from inside header component -->
        <div class="flex flex-1 space-x-16">
            <Sidebar :collapsedSidebar="collapsedSidebar" /> <!-- "collapsedSidebar" is a variable that indicates if sidebar is expanded or collapsed -->
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Header from "../components/Header.vue";
import Sidebar from "../components/Sidebar.vue";

const collapsedSidebar = ref(false); // Variable to store sidebar collapsed status

const toggleSidebar = () => collapsedSidebar.value = !collapsedSidebar.value; // Toggle sidebar collapsed state
</script>
