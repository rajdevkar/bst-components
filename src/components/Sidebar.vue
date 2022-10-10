<template>
    <div class="flex-col space-y-4 bg-neutral-800 border-r border-neutral-350 text-white px-2 py-4"
        :class="{
        'w-64': !collapsedSidebar, // This class is only applied when sidebar is expanded
        'hidden md:flex': collapsedSidebar // This class is for hiding sidebar in mobile view
    }">
        <SidebarLink name="Dashboard" icon-link="./assets/svg/dashboard.svg#svg" :collapsed="collapsedSidebar" />
        <SidebarLink name="Training Calendar" icon-link="./assets/svg/calendar.svg#svg" :collapsed="collapsedSidebar" />

        <SidebarLinkWDropdown name="BST Open Library" icon-link="./assets/svg/library.svg#svg" :collapsed="collapsedSidebar" />
        <SidebarLinkWDropdown name="My Library" icon-link="./assets/svg/open-book.svg#svg" :drop-down-list="['Exercise Videos', 'Training Routines', 'Pre-made Plans']" :collapsed="collapsedSidebar" />

        <SidebarLinkHeading heading="Settings" v-if="!collapsedSidebar" />

        <SidebarLink name="Manage Billing" icon-link="./assets/svg/card.svg#svg" class="!mt-2" :collapsed="collapsedSidebar" />
        <SidebarLink name="Manage Account" icon-link="./assets/svg/user.svg#svg" :collapsed="collapsedSidebar" />
    </div>
</template>

<script setup>
import SidebarLink from './SidebarLink.vue';
import SidebarLinkWDropdown from './SidebarLinkWDropdown.vue';
import SidebarLinkHeading from './SidebarLinkHeading.vue';

defineProps({
    collapsedSidebar: Boolean, // variable which indicates if sidebar is collapsed or not
})
</script>
