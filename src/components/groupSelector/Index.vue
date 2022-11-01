<template>
  <div class="bg-neutral-800 flex flex-col w-full max-w-xl 2xl:max-w-2xl p-4">
    <div
        class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4 pb-4 border-b border-neutral-350">
      <div
          class="flex-1 flex items-center space-x-2 rounded-sm border border-neutral-350 text-neutral-250 placeholder:text-neutral-250 px-4 py-2">
        <svg width="16px" height="16px" class="shrink-0" >
          <use xlink:href="/assets/svg/search.svg#svg"></use>
        </svg>
        <input type="text" placeholder="Search" class="w-full text-sm bg-transparent text-white focus:outline-none"/>
      </div>

      <button
          class="flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all duration-150 ease-in-out">
        <svg width="20px" height="20px">
          <use xlink:href="/assets/svg/plus.svg#svg"></use>
        </svg>
        <span>New Group</span>
      </button>
    </div>

    <div class="flex flex-col py-1 md:py-4 space-y-4 md:space-y-8">
      <div class="flex flex-col max-h-96 overflow-y-scroll">
        <!-- Loop all groups in this div -->
        <div v-for="(group, index) in groups" :key="index">
          <div
              class="group flex items-center justify-between space-x-2 md:space-x-4 hover:bg-gold-950 text-sm hover:text-neutral-800 font-semibold pl-4 pr-3 py-2 my-1 rounded-sm cursor-pointer transition-all duration-150 ease-in-out"
              :class="{'bg-gold-600 text-neutral-800': group.edit || group.selected}"
          >
            <!-- on edit button press make this contenteditable true, watch innerText of span tag to update values on submit -->
            <span :contenteditable="group.edit"
                  :class="{'max-w-[200px] md:max-w-sm border border-neutral-900 px-2 -mx-2 py-1.5 -my-1.5 rounded-sm focus:outline-none': group.edit, 'truncate': !group.edit}">
              {{group.name}}
            </span>
            <div class="flex items-center space-x-2.5 divide-x group-hover:divide-neutral-800"
                 :class="{'divide-neutral-800': group.edit || group.selected}">
              <button @click="group.edit = !group.edit" class="hover:bg-white/30 p-1.5 rounded-sm transition-all duration-300 ease-in-out">
                <svg width="20px" height="20px" v-if="!group.edit">
                  <use xlink:href="/assets/svg/edit.svg#svg"></use>
                </svg>
                <svg width="20px" height="20px" v-else>
                  <use xlink:href="/assets/svg/tick.svg#svg"></use>
                </svg>
              </button>
              <div class="pl-2.5">
                <button class="text-red-500 hover:bg-white/30 p-1.5 rounded-sm transition-all duration-300 ease-in-out">
                  <svg width="20px" height="20px">
                    <use xlink:href="/assets/svg/delete.svg#svg"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <hr class="border-neutral-350"/>
        </div>
      </div>

      <div class="flex flex-col items-start space-y-2">
        <span class="text-white/80 text-xs">You have reached max limit of 5 groups, Upgrade your plan to create more groups.</span>
        <button class="text-sm font-semibold text-gold-550">Upgrade Your Plan</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const groups = ref([
  {
    name: '🏏 Cricket Players Group',
    edit: false,
    selected: true,
  },
  {
    name: '🏀 BasketBall Athletes',
    edit: false,
    selected: false,
  },
  {
    name: '🥊 Boxer Athletes',
    edit: false,
    selected: false,
  },
  {
    name: '🏸 Badminton Prague Players',
    edit: false,
    selected: false,
  },
  {
    name: 'Rahul Players Group',
    edit: false,
    selected: false,
  }
]);
</script>
