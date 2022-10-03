<!-- Sidebar link with dropdown component e.g, <SidebarLink name="Dashboard" :iconLink="assets/svg/dashboard.svg#svg" /> -->
<!-- collapsed variable in v-if tags indicates sidebar is closed or open. You can ignore v-if tags -->
<template>
    <div>
        <div class="group flex items-center space-x-2 w-full hover:bg-[#171717] active:bg-[#FBB03A] text-white active:text-[#262626] text-sm font-medium rounded-sm px-4 py-2 transition-all duration-150 ease-in-out cursor-pointer">
            <svg width="24px" height="24px">
                <use :xlink:href="iconLink" class="stroke-white group-active:stroke-[#262626]"></use>
            </svg>
            <span class="flex-1" v-if="!collapsed">
              {{name}} <!-- e.g Dashboard -->
            </span>
            <svg width="20px" height="20px" v-if="!collapsed">
                <use xlink:href="assets/svg/chevron-down.svg#svg" class="stroke-white group-active:stroke-[#262626]"></use>
            </svg>
        </div>
        <div class="flex flex-col space-y-2 pl-6 mt-2" v-if="dropDownList && !collapsed">
            <div
                class="group flex items-center space-x-2 w-full hover:bg-[#171717] active:bg-[#FBB03A] text-white active:text-[#262626] text-sm font-medium rounded-sm px-4 py-2 transition-all duration-150 ease-in-out cursor-pointer" v-for="(item, index) in dropDownList" :key="index">
                <svg width="24px" height="24px">
                    <use xlink:href="assets/svg/minus.svg#svg" class="stroke-white group-active:stroke-[#262626]"></use>
                </svg>
                <span class="flex-1">{{item}}</span>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps({
        name: String, // label - e.g Dashboard
        iconLink: String, // url of icon - e.g "assets/svg/dashboard.svg#svg"
        collapsed: Boolean, // true/false value which indicates sidebar is closed or open
        dropDownList: Object, // Dropdown contents e.g "['Exercise Videos', 'Training Routines', 'Pre-made Plans']"
    })
</script>
