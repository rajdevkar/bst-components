<template>
  <MainLayout>
    <div class="absolute inset-0" v-if="show !== ''" @click.self="show = ''"></div>

    <div class="flex-1 flex flex-col items-center space-y-8">
      <div class="relative flex w-full justify-center">
        <div
            class="flex flex-col md:flex-row w-full max-w-xl 2xl:max-w-2xl space-y-4 md:space-y-0 md:space-x-4 divide-y md:divide-y-0 md:divide-x divide-neutral-350 border-b border-neutral-350 pb-4">
          <button class="flex-1 flex items-center justify-between"
                  :class="{'text-gold-550 fill-gold-550': show === 'groups'}" @click="show = 'groups'">
            <div class="flex flex-col items-start">
              <span class="text-xs font-medium text-white/80">Select Group</span>
              <span class="font-semibold mt-2">🏏 Cricket Players Group</span>
            </div>
            <svg width="24px" height="24px" class="transition-all duration-300 ease-in-out"
                 :class="show === 'groups' ? 'rotate-90' : '-rotate-90'">
              <use xlink:href="/assets/svg/chevron.svg#svg"></use>
            </svg>
          </button>
          <button class="flex-1 flex items-center justify-between pt-4 md:pt-0 md:pl-4"
                  :class="{'text-gold-550 fill-gold-550': show === 'calendar'}" @click="show = 'calendar'">
            <div class="flex flex-col items-start">
              <span class="text-xs font-medium text-white/80">Select Date</span>
              <span class="font-semibold mt-2">11 Sept 2022</span>
            </div>
            <svg width="20px" height="20px">
              <use xlink:href="/assets/svg/edit.svg#svg"></use>
            </svg>
          </button>
        </div>

        <!-- Section in this comment is for animation no need to copy it. -->
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
          <div v-if="show === 'groups'" class="absolute top-40 md:top-20 inset-x-0 flex justify-center"
               @click.self="show = ''">
            <!-- END SECTION -->

            <GroupSelector/>

            <!-- Section in this comment is for animation no need to copy it. -->
          </div>
        </transition>
        <!-- END SECTION -->

        <!-- Section in this comment is for animation no need to copy it. -->
        <transition
            enter-active-class="transition duration-100 ease-out"
            enter-from-class="transform scale-95 opacity-0"
            enter-to-class="transform scale-100 opacity-100"
            leave-active-class="transition duration-75 ease-in"
            leave-from-class="transform scale-100 opacity-100"
            leave-to-class="transform scale-95 opacity-0"
        >
          <div v-if="show === 'calendar'" class="absolute top-40 md:top-20 inset-x-0 flex justify-center"
               @click.self="show = ''">
            <!-- END SECTION -->

            <Calendar/>

            <!-- Section in this comment is for animation no need to copy it. -->
          </div>
        </transition>
        <!-- END SECTION -->
      </div>

      <div class="flex items-center justify-between text-white w-full max-w-xl 2xl:max-w-2xl">
        <span class="font-semibold">Create plan for 11 Sept 2022</span>

        <div class="flex space-x-4 items-center">
          <!-- Here no need to write/copy '!p-[7px] !space-x-0' just adjust them directly in classes -->
          <Button :outline="true" class="!p-[7px] !space-x-0">
            <template #icon>
              <svg width="20px" height="20px">
                <use xlink:href="/assets/svg/dots.svg#svg"></use>
              </svg>
            </template>
          </Button>

          <Button :outline="true" class="hidden md:flex">
            <template #icon>
              <svg width="20px" height="20px">
                <use xlink:href="/assets/svg/share.svg#svg"></use>
              </svg>
            </template>
            Share
          </Button>

          <Button class="hidden md:flex">
            <template #icon>
              <svg width="20px" height="20px">
                <use xlink:href="/assets/svg/circle-tick.svg#svg"></use>
              </svg>
            </template>
            Save
          </Button>
        </div>
      </div>

      <div class="flex flex-col space-y-4 w-full max-w-xl 2xl:max-w-2xl pb-20">
        <Accordion label="WEIGHTS (DAY 1)">
        </Accordion>

        <Accordion label="Name title of the Plan/Workout">
          <div class="flex flex-col space-y-8 items-center">
            <input
                class="w-full text-neutral-800 placeholder:text-gray-400 rounded-sm text-sm focus:outline-none px-4 py-2"
                placeholder="Add Note/Subtitle"/>

            <div class="flex items-center space-x-4">
              <Button>
                <template #icon>
                  <svg width="20px" height="20px">
                    <use xlink:href="/assets/svg/plus.svg#svg"></use>
                  </svg>
                </template>
                Add Exercise
              </Button>

              <Button>
                <template #icon>
                  <svg width="20px" height="20px">
                    <use xlink:href="/assets/svg/plus.svg#svg"></use>
                  </svg>
                </template>
                Add Routine
              </Button>
            </div>
          </div>
        </Accordion>

        <Accordion label="WEIGHT TONUS">
        </Accordion>
      </div>

      <div class="md:hidden fixed bottom-0 inset-x-0 flex space-x-4 bg-neutral-800 p-4">
        <Button :outline="true" :isLarge="true" class="w-full">
          <template #icon>
            <svg width="20px" height="20px">
              <use xlink:href="/assets/svg/share.svg#svg"></use>
            </svg>
          </template>
          Share
        </Button>

        <Button :isLarge="true" class="w-full">
          <template #icon>
            <svg width="20px" height="20px">
              <use xlink:href="/assets/svg/circle-tick.svg#svg"></use>
            </svg>
          </template>
          Save
        </Button>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import {ref} from "vue";
import MainLayout from "./layouts/Main.vue";
import GroupSelector from "./components/groupSelector/Index.vue";
import Calendar from "./components/calendar/Index.vue";
import Button from "./components/Button.vue";
import Accordion from "./components/Accordion.vue";

const show = ref('');
</script>
