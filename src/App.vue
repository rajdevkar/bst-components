<template>
  <MainLayout>
    <div class="flex flex-col items-center space-y-4">
      <div class="flex flex-col md:flex-row w-full max-w-xl 2xl:max-w-2xl space-y-4 md:space-y-0 md:space-x-4 divide-y md:divide-y-0 md:divide-x divide-neutral-350 border-b border-neutral-350 pb-4">
        <button class="flex-1 flex items-center justify-between" @click="show = 'groups'">
          <div class="flex flex-col items-start">
            <span class="text-xs font-medium text-white/80">Select Group</span>
            <span class="font-semibold mt-2">🏏 Cricket Players Group</span>
          </div>
          <svg width="24px" height="24px" class="transition-all duration-300 ease-in-out" :class="show === 'groups' ? 'rotate-90' : '-rotate-90'">
            <use xlink:href="/assets/svg/chevron.svg#svg"></use>
          </svg>
        </button>
        <button class="flex-1 flex items-center justify-between pt-4 md:pt-0 md:pl-4" @click="show = 'calendar'">
          <div class="flex flex-col items-start">
            <span class="text-xs font-medium text-white/80">Select Date</span>
            <span class="font-semibold mt-2">11 Sept 2022</span>
          </div>
          <svg width="20px" height="20px">
            <use xlink:href="/assets/svg/edit.svg#svg"></use>
          </svg>
        </button>
      </div>

      <div v-if="show === 'groups'" class="bg-neutral-800 flex flex-col w-full max-w-xl 2xl:max-w-2xl p-4">
        <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:justify-between pb-4 border-b border-neutral-350">
          <div class="flex max-w-xs space-x-2 rounded-sm border border-neutral-350 text-neutral-250 placeholder:text-neutral-250 px-4 py-3">
            <svg width="16px" height="16px">
              <use xlink:href="/assets/svg/search.svg#svg"></use>
            </svg>
            <input type="text" placeholder="Search" class="text-xs bg-transparent text-white focus:outline-none" />
          </div>

          <div class="flex items-center space-x-4">
            <button class="flex space-x-1 items-center text-gold-550 border border-gold-550 rounded-sm px-4 py-1.5">
              <svg width="16px" height="16px">
                <use xlink:href="/assets/svg/edit.svg#svg"></use>
              </svg>
              <span>Edit</span>
            </button>

            <button class="flex space-x-1 items-center text-neutral-800 bg-gold-550 rounded-sm px-4 py-2">
              <svg width="24px" height="24px" class="shrink-0">
                <use xlink:href="/assets/svg/plus.svg#svg"></use>
              </svg>
              <span>New Group</span>
            </button>
          </div>
        </div>

        <div class="flex flex-col py-1 md:py-4 space-y-4 md:space-y-8">
          <div class="flex flex-col space-y-1">
            <div class="group flex items-center justify-between space-x-2 md:space-x-4 hover:bg-gold-550 active:bg-neutral-900 text-sm hover:text-neutral-800 active:hover:text-white font-semibold px-4 py-2.5 rounded-sm cursor-pointer">
              <span class="truncate">USK A IN-SEASON MAINTENANCE USK A</span>
              <span class="opacity-0 group-hover:opacity-100 group-active:group-hover:opacity-0 transition-all duration-300 ease-in-out">Select</span>
            </div>
            <hr class="border-neutral-350" />
            <div class="group flex items-center justify-between space-x-2 md:space-x-4 hover:bg-gold-550 active:bg-neutral-900 text-sm hover:text-neutral-800 active:hover:text-white font-semibold px-4 py-2.5 rounded-sm cursor-pointer">
              <span class="truncate">🏀 BasketBall Athletes</span>
              <span class="opacity-0 group-hover:opacity-100 group-active:group-hover:opacity-0 transition-all duration-300 ease-in-out">Select</span>
            </div>
            <hr class="border-neutral-350" />
            <div class="group flex items-center justify-between space-x-2 md:space-x-4 hover:bg-gold-550 active:bg-neutral-900 text-sm hover:text-neutral-800 active:hover:text-white font-semibold px-4 py-2.5 rounded-sm cursor-pointer">
              <span class="truncate">🥊 Boxer Athletes</span>
              <span class="opacity-0 group-hover:opacity-100 group-active:group-hover:opacity-0 transition-all duration-300 ease-in-out">Select</span>
            </div>
            <hr class="border-neutral-350" />
            <div class="group flex items-center justify-between space-x-2 md:space-x-4 hover:bg-gold-550 active:bg-neutral-900 text-sm hover:text-neutral-800 active:hover:text-white font-semibold px-4 py-2.5 rounded-sm cursor-pointer">
              <span class="truncate">🏸 Badminton Prague Players.</span>
              <span class="opacity-0 group-hover:opacity-100 group-active:group-hover:opacity-0 transition-all duration-300 ease-in-out">Select</span>
            </div>
            <hr class="border-neutral-350" />
            <div class="group flex items-center justify-between space-x-2 md:space-x-4 hover:bg-gold-550 active:bg-neutral-900 text-sm hover:text-neutral-800 active:hover:text-white font-semibold px-4 py-2.5 rounded-sm cursor-pointer">
              <span class="truncate">Rahul Players Group</span>
              <span class="opacity-0 group-hover:opacity-100 group-active:group-hover:opacity-0 transition-all duration-300 ease-in-out">Select</span>
            </div>
            <hr class="border-neutral-350" />
          </div>

          <div class="flex flex-col items-start space-y-2">
            <span class="text-white text-xs">You have reached max limit of 5 groups, Upgrade your plan to create more groups.</span>
            <button class="text-sm font-semibold text-gold-550">Upgrade Your Plan</button>
          </div>
        </div>
      </div>

      <Calendar v-else-if="show === 'calendar'" />
    </div>
  </MainLayout>
</template>

<script setup>
import {ref} from "vue";
import MainLayout from "./layouts/Main.vue";
import Calendar from "./components/calendar/Index.vue";

const show = ref('calendar');
</script>
