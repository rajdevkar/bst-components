<!-- Sidebar link component e.g, <SidebarLink name="Dashboard" :iconLink="assets/svg/dashboard.svg#svg" /> -->
<!-- collapsed variable in v-if tags indicates sidebar is closed or open. You can ignore v-if tags -->
<template>
  <div class="relative">
    <a :id="`item-${name}`" href="/"
       class="peer flex items-center space-x-2 w-full hover:bg-neutral-900 active:bg-gold-950 text-white active:text-neutral-750 text-sm font-medium rounded-sm px-4 py-2 transition-all duration-150 ease-in-out"
        :onmouseenter="mouseShow">
      <svg width="24px" height="24px">
        <use :xlink:href="iconLink"></use>
      </svg>
      <span class="flex-1" v-if="!collapsed">
          {{ name }} <!-- e.g Dashboard -->
      </span>
    </a>
    <!-- Tooltip to show when sidebar is collapsed -->
    <div class="hidden fixed left-16 peer-hover:inline-block ml-6" :style="`top: ${position}px`" v-if="collapsed">
      <div
          class="whitespace-nowrap text-neutral-750 bg-gold-550 rounded-sm text-sm font-semibold px-3 py-[10px] transition-opacity duration-150 ease-in-out after:absolute after:top-[40%] after:-left-2 after:mt-0 after:border-4 after:border-solid after:border-transparent after:border-r-gold-550">
        {{ name }} <!-- e.g Dashboard -->
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";
// Props accepted by the component
const props = defineProps({
  name: String, // label - e.g Dashboard
  iconLink: String, // url of icon - e.g "assets/svg/dashboard.svg#svg"
  collapsed: Boolean, // true/false valude which indicates sidebar is closed or open
})

const position = ref(0);

const mouseShow = () => {
  // Get position of item hovered using id assigned to it
  var offsets = document.getElementById('item-' + props.name).getBoundingClientRect()

  // set top position of tooltip to top of the hovered div
  position.value = offsets.top - 70;
};
</script>
