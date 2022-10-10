<!-- Sidebar link component e.g, <SidebarLink name="Dashboard" :iconLink="assets/svg/dashboard.svg#svg" /> -->
<!-- collapsed variable in v-if tags indicates sidebar is closed or open. You can ignore v-if tags -->
<template>
    <div class="relative">
        <a href="/" class="peer flex items-center space-x-2 w-full hover:bg-neutral-900 active:bg-gold-600 text-white active:text-neutral-750 text-sm font-medium rounded-sm px-4 py-2 transition-all duration-150 ease-in-out">
            <svg width="24px" height="24px">
                <use :xlink:href="iconLink"></use>
            </svg>
            <span class="flex-1" v-if="!collapsed">
                {{name}} <!-- e.g Dashboard -->
            </span>
        </a>
        <!-- Tooltip to show when sidebar is collapsed -->
        <div class="hidden absolute top-0 left-full peer-hover:inline-block ml-6" v-if="collapsed">
            <div class="whitespace-nowrap text-neutral-750 bg-gold-600 rounded-sm text-sm font-semibold px-3 py-[10px] transition-opacity duration-150 ease-in-out arrow-left">
                {{name}} <!-- e.g Dashboard -->
            </div>
        </div>
    </div>
</template>

<script setup>
    // Props accepted by the component
    defineProps({
        name: String, // label - e.g Dashboard
        iconLink: String, // url of icon - e.g "assets/svg/dashboard.svg#svg"
        collapsed: Boolean, // true/false value which indicates sidebar is closed or open
    })
</script>
