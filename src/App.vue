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
          <div v-if="show === 'groups'" class="absolute top-40 md:top-20 inset-x-0 flex justify-center z-50"
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
          <div v-if="show === 'calendar'" class="absolute top-40 md:top-20 inset-x-0 flex justify-center z-50"
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
          <button class="flex items-center justify-center text-sm font-semibold rounded-sm p-[7px] hover:bg-gold-550 border border-gold-550 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out">
            <svg width="20px" height="20px">
              <use xlink:href="/assets/svg/dots.svg#svg"></use>
            </svg>
          </button>

          <button class="hidden md:flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-[7px] hover:bg-gold-550 border border-gold-550 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out">
            <svg width="20px" height="20px">
              <use xlink:href="/assets/svg/share.svg#svg"></use>
            </svg>
            <span>Share</span>
          </button>

          <button class="hidden md:flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-2 bg-gold-550 text-neutral-800">
            <svg width="20px" height="20px">
              <use xlink:href="/assets/svg/circle-tick.svg#svg"></use>
            </svg>
            <span>Save</span>
          </button>
        </div>
      </div>

      <div class="flex flex-col space-y-4 w-full max-w-xl 2xl:max-w-2xl pb-20">
        <Accordion label="WEIGHTS (DAY 1)">
        </Accordion>

        <Accordion>
          <div class="flex flex-col space-y-8 items-center px-8 pt-4 pb-8">
            <input placeholder="Add Note/Subtitle" class="w-full text-neutral-800 placeholder:text-gray-400 rounded-sm text-sm focus:outline-none px-4 py-2" />

            <div class="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
              <button class="flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-2 bg-gold-550 text-neutral-800">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>Add Exercise</span>
              </button>

              <button class="flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-2 bg-gold-550 text-neutral-800">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>Add Routine</span>
              </button>
            </div>
          </div>
        </Accordion>

        <Accordion label="WEIGHT TONUS">
          <div class="flex flex-col space-y-8 p-8">
            <div class="relative flex justify-center">
              <span class="font-semibold">WARM-UP</span>
              <div class="absolute right-0 flex items-center inset-y-0">
                <button>
                  <svg width="20px" height="20px">
                    <use xlink:href="/assets/svg/dots.svg#svg"></use>
                  </svg>
                </button>
              </div>
            </div>

            <Card header="Pre-Weights Warm Up #3 (0)">
              <Input placeholder="Add Sets/Reps/Notes if any..." :hasBorder="true" />
            </Card>

            <Card header="Box drop double hurdle rebound" :light="false">
              <div class="!mt-4">
                <span class="text-xs text-white/80">4x4 (first 2 sets controlled down-up and raise on toes/last two sets explosive up) 90-140kg</span>
              </div>
            </Card>

            <Card header="Single Leg Hurdle Hops" :light="false">
              <Input placeholder="Add Sets/Reps/Notes if any..." :hasBorder="true" />
            </Card>
          </div>
        </Accordion>
      </div>

      <div class="md:hidden fixed bottom-0 inset-x-0 flex space-x-4 bg-neutral-800 p-4">
        <button class="w-full flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-3 hover:bg-gold-550 border border-gold-550 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out">
          <svg width="20px" height="20px">
            <use xlink:href="/assets/svg/share.svg#svg"></use>
          </svg>
          <span>Share</span>
        </button>

        <button class="w-full flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-3 bg-gold-550 text-neutral-800">
          <svg width="20px" height="20px">
            <use xlink:href="/assets/svg/circle-tick.svg#svg"></use>
          </svg>
          <span>Save</span>
        </button>
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
import Input from "./components/Input.vue";
import Accordion from "./components/Accordion.vue";
import Card from "./components/Card.vue";

const show = ref('');
</script>
