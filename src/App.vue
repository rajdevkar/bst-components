<template>
  <MainLayout>
    <div class="flex flex-col items-center space-y-4">
      <div class="flex flex-col md:flex-row w-full max-w-xl 2xl:max-w-2xl space-y-4 md:space-y-0 md:space-x-4 divide-y md:divide-y-0 md:divide-x divide-neutral-350 border-b border-neutral-350 pb-4">
        <button class="flex-1 flex items-center justify-between">
          <div class="flex flex-col items-start">
            <span class="text-xs font-medium text-white/80">Select Group</span>
            <span class="font-semibold mt-2">🏏 Cricket Players Group</span>
          </div>
          <svg width="20px" height="20px">
            <use xlink:href="/assets/svg/chevron-down.svg#svg"></use>
          </svg>
        </button>
        <button class="flex-1 flex items-center justify-between pt-4 md:pt-0 md:pl-4">
          <div class="flex flex-col items-start">
            <span class="text-xs font-medium text-white/80">Select Date</span>
            <span class="font-semibold mt-2">11 Sept 2022</span>
          </div>
          <svg width="20px" height="20px">
            <use xlink:href="/assets/svg/edit.svg#svg"></use>
          </svg>
        </button>
      </div>

      <Calendar />
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from "./layouts/Main.vue";
import Calendar from "./components/calendar/Index.vue";
</script>
