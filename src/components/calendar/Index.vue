<template>
  <div class="flex flex-col w-full max-w-xl 2xl:max-w-2xl justify-center rounded-sm overflow-hidden">
      <header
          class="flex flex-row-reverse md:flex-row items-center justify-between md:justify-start md:space-x-8 bg-gray-100 text-gray-700 px-6 py-4 font-semibold">
        <button
            class="hidden md:block text-xs text-gray-700 bg-white hover:bg-gray-200 rounded-sm border border-gray-300 px-4 py-2 transition-all duration-300 ease-in-out">
          Today
        </button>
        <div class="flex items-center space-x-4">
          <button class="hover:bg-gray-200 rounded-full p-2 transition-all duration-300 ease-in-out">
            <img src="/assets/svg/chevron.svg"/>
          </button>
          <button class="hover:bg-gray-200 rounded-full p-2 transition-all duration-300 ease-in-out">
            <img src="/assets/svg/chevron.svg" class="rotate-180"/>
          </button>
        </div>
        <div>
          <h2 class="text-sm md:text-xl">October, 2022</h2>
        </div>
      </header>

      <div class="grid cursor-default grid-cols-7 divide-x divide-y divide-gray-300 bg-white">
        <HeadItem :value="head" v-for="(head, index) in datesHead" :key="index" class="first:border-t first:border-l last:border-b last:border-r border-gray-300"/>
        <CalendarItem :value="date.date" :lastMonth="date.lastMonth" :event="date.event"
                      v-for="(date, index) in dates" :key="index"
                      class="first:border-t first:border-l last:border-b last:border-r border-gray-300"/>
      </div>
</div>
</template>

<script setup>
import CalendarItem from "./Item.vue";
import HeadItem from "./HeadItem.vue";

const datesHead = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const dates = [
  {
    date: '28',
    event: false,
    lastMonth: true
  },
  {
    date: '29',
    event: false,
    lastMonth: true
  },
  {
    date: '30',
    event: false,
    lastMonth: true
  },
  {
    date: '31',
    event: false,
    lastMonth: true
  },
  {
    date: '1',
    event: false,
    lastMonth: false
  },
  {
    date: '2',
    event: false,
    lastMonth: false
  },
  {
    date: '3',
    event: false,
    lastMonth: false
  },
  {
    date: '4',
    event: false,
    lastMonth: false
  },
  {
    date: '5',
    event: false,
    lastMonth: false
  },
  {
    date: '6',
    event: false,
    lastMonth: false
  },
  {
    date: '7',
    event: false,
    lastMonth: false
  },
  {
    date: '8',
    event: false,
    lastMonth: false
  },
  {
    date: '9',
    event: false,
    lastMonth: false
  },
  {
    date: '10',
    event: false,
    lastMonth: false
  },
  {
    date: '11',
    event: false,
    lastMonth: false
  },
  {
    date: '12',
    event: false,
    lastMonth: false
  },
  {
    date: '13',
    event: false,
    lastMonth: false
  },
  {
    date: '14',
    event: true,
    lastMonth: false
  },
  {
    date: '15',
    event: false,
    lastMonth: false
  },
  {
    date: '16',
    event: true,
    lastMonth: false
  },
  {
    date: '17',
    event: false,
    lastMonth: false
  },
  {
    date: '18',
    event: false,
    lastMonth: false
  },
  {
    date: '19',
    event: false,
    lastMonth: false
  },
  {
    date: '20',
    event: false,
    lastMonth: false
  },
  {
    date: '21',
    event: false,
    lastMonth: false
  },
  {
    date: '22',
    event: false,
    lastMonth: false
  },
  {
    date: '23',
    event: false,
    lastMonth: false
  },
  {
    date: '24',
    event: false,
    lastMonth: false
  },
  {
    date: '25',
    event: false,
    lastMonth: false
  },
  {
    date: '26',
    event: false,
    lastMonth: false
  },
  {
    date: '27',
    event: false,
    lastMonth: false
  },
  {
    date: '28',
    event: false,
    lastMonth: false
  },
  {
    date: '29',
    event: false,
    lastMonth: false
  },
  {
    date: '30',
    event: false,
    lastMonth: false
  },
  {
    date: '31',
    event: false,
    lastMonth: false
  },
  {
    date: '1',
    event: false,
    lastMonth: true
  },
  {
    date: '2',
    event: false,
    lastMonth: true
  },
  {
    date: '3',
    event: false,
    lastMonth: true
  },
  {
    date: '4',
    event: false,
    lastMonth: true
  },
  {
    date: '5',
    event: false,
    lastMonth: true
  },
  {
    date: '6',
    event: false,
    lastMonth: true
  },
  {
    date: '7',
    event: false,
    lastMonth: true
  },
];
</script>
