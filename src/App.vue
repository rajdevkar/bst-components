<template>
  <MainLayout>
    <div class="absolute inset-0" v-if="show !== ''" @click.self="show = ''"></div>

    <div
        class="absolute inset-0 lg:relative overflow-y-scroll h-full flex-1 flex justify-center p-4 bg-neutral-900 z-10"
         v-if="showExercises">
      <div class="flex flex-col items-center space-y-8 w-full max-w-xl 2xl:max-w-2xl">
        <div class="flex flex-col space-y-4">
          <div
              class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 md:space-y-0 lg:pb-4 lg:border-b lg:border-neutral-350">
            <div
                class="flex items-center justify-between pb-4 lg:pb-0 border-b lg:border-b-0 border-neutral-350">
              <button
                  class="flex items-center justify-between focus:outline-none">
                <div class="flex flex-col items-start">
                  <span class="text-xs font-medium text-white/80">Select Exercise Category</span>
                  <div class="flex items-end space-x-2">
                    <span class="font-semibold mt-2">🏃‍♀️RUNNING/SPEED/AGILITY</span>
                    <svg width="20px" height="20px" class="transition-all duration-300 ease-in-out -rotate-90">
                      <use xlink:href="/assets/svg/chevron.svg#svg"></use>
                    </svg>
                  </div>
                </div>
              </button>

              <button
                  type="button"
                  @click="showExercises = false"
                  class="flex lg:hidden items-center justify-center text-sm font-semibold rounded-sm p-[7px] hover:bg-gold-950 border border-gold-550 hover:border-gold-950 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out"
              >
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/close.svg#svg"></use>
                </svg>
              </button>
            </div>

            <label for="only_my_routine"
                   class="flex items-center space-x-2 bg-neutral-800 text-sm text-gold-550 font-semibold rounded-sm px-4 py-3 cursor-pointer">
              <input type="checkbox" id="only_my_routine" name="only_my_routine"
                     class="bg-transparent border border-gold-550 accent-gold-550 w-4 h-4"/>
              <span>Show My Exercises</span>
            </label>
          </div>

          <div
              class="w-full flex items-center space-x-2 rounded-sm bg-neutral-800 border border-neutral-350 text-neutral-250 placeholder:text-neutral-250 px-4 py-3">
            <svg width="16px" height="16px" class="shrink-0">
              <use xlink:href="/assets/svg/search.svg#svg"></use>
            </svg>
            <input type="text" placeholder="Search Exercises"
                   class="w-full text-sm bg-transparent text-white focus:outline-none"/>
          </div>

          <div class="flex flex-wrap gap-2">
            <div
                class="inline-block whitespace-nowrap bg-blue-100 hover:bg-gold-950 active:bg-gold-950 text-sm text-neutral-800 rounded-sm px-2 py-1 transition-all duration-150 ease-in-out cursor-pointer">
              Balance (all types)
            </div>
            <div
                class="inline-block whitespace-nowrap bg-blue-100 hover:bg-gold-950 active:bg-gold-950 text-sm text-neutral-800 rounded-sm px-2 py-1 transition-all duration-150 ease-in-out cursor-pointer">
              Quadruped exercises
            </div>
            <div
                class="inline-block whitespace-nowrap bg-blue-100 hover:bg-gold-950 active:bg-gold-950 text-sm text-neutral-800 rounded-sm px-2 py-1 transition-all duration-150 ease-in-out cursor-pointer">
              Balance (all types)
            </div>
            <div
                class="inline-block whitespace-nowrap bg-blue-100 hover:bg-gold-950 active:bg-gold-950 text-sm text-neutral-800 rounded-sm px-2 py-1 transition-all duration-150 ease-in-out cursor-pointer">
              Balance (all)
            </div>
            <div
                class="inline-block whitespace-nowrap bg-blue-100 hover:bg-gold-950 active:bg-gold-950 text-sm text-neutral-800 rounded-sm px-2 py-1 transition-all duration-150 ease-in-out cursor-pointer">
              Quadruped exercises
            </div>
          </div>
        </div>

        <div class="w-full grid grid-cols-1 md:grid-cols-2 gap-4 !pb-14">
          <div class="flex flex-col space-y-2 bg-neutral-800 rounded-sm p-2 cursor-pointer">
            <div class="relative rounded-sm overflow-hidden">
              <img src="/assets/imgs/1.png"
                   class="w-full object-cover flex-1 aspect-videos rounded-sm"/>
              <button
                  class="absolute bottom-2 right-2 flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-3 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all ease-in-out duration-150">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>ADD</span>
              </button>
            </div>
            <span class="text-sm whitespace-nowrap truncate">Backwards hammer throws</span>
          </div>

          <div class="flex flex-col space-y-2 bg-neutral-800 rounded-sm p-2 cursor-pointer">
            <div class="relative rounded-sm overflow-hidden">
              <img src="/assets/imgs/2.png"
                   class="w-full object-cover flex-1 aspect-videos rounded-sm"/>
              <button
                  class="absolute bottom-2 right-2 flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-3 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all ease-in-out duration-150">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/tick.svg#svg"></use>
                </svg>
                <span>ADDED</span>
              </button>
            </div>
            <span class="text-sm whitespace-nowrap truncate">Box drop hurdle rebound</span>
          </div>

          <div class="flex flex-col space-y-2 bg-neutral-800 rounded-sm p-2 cursor-pointer">
            <div class="relative rounded-sm overflow-hidden">
              <img src="/assets/imgs/3.png"
                   class="w-full object-cover flex-1 aspect-videos rounded-sm"/>
              <button
                  class="absolute bottom-2 right-2 flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-3 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all ease-in-out duration-150">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>ADD</span>
              </button>
            </div>
            <span class="text-sm whitespace-nowrap truncate">Hurdle hops (sideways)</span>
          </div>

          <div class="flex flex-col space-y-2 bg-neutral-800 rounded-sm p-2 cursor-pointer">
            <div class="relative rounded-sm overflow-hidden">
              <img src="/assets/imgs/4.png"
                   class="w-full object-cover flex-1 aspect-videos rounded-sm"/>
              <button
                  class="absolute bottom-2 right-2 flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-3 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all ease-in-out duration-150">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>ADD</span>
              </button>
            </div>
            <span class="text-sm whitespace-nowrap truncate">Hurdle hops (vertical-to-horizontal)</span>
          </div>

          <div class="flex flex-col space-y-2 bg-neutral-800 rounded-sm p-2 cursor-pointer">
            <div class="relative rounded-sm overflow-hidden">
              <img src="/assets/imgs/1.png"
                   class="w-full object-cover flex-1 aspect-videos rounded-sm"/>
              <button
                  class="absolute bottom-2 right-2 flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-3 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all ease-in-out duration-150">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>ADD</span>
              </button>
            </div>
            <span class="text-sm whitespace-nowrap truncate">Hurdle hops (vertical-to-horizontal)</span>
          </div>

          <div class="flex flex-col space-y-2 bg-neutral-800 rounded-sm p-2 cursor-pointer">
            <div class="relative rounded-sm overflow-hidden">
              <img src="/assets/imgs/1.png"
                   class="w-full object-cover flex-1 aspect-videos rounded-sm"/>
              <button
                  class="absolute bottom-2 right-2 flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-3 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all ease-in-out duration-150">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>ADD</span>
              </button>
            </div>
            <span class="text-sm whitespace-nowrap truncate">Hurdle hops (vertical-to-horizontal)</span>
          </div>
        </div>
      </div>
    </div>

    <div
        class="absolute inset-0 lg:relative overflow-y-scroll h-full flex-1 flex justify-center p-4 bg-neutral-900 z-10"
         v-if="showRoutines">
      <div class="flex flex-col space-y-8 w-full max-w-xl 2xl:max-w-2xl">
        <div class="flex flex-col space-y-4">
          <div
              class="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:pb-4 lg:border-b lg:border-neutral-350">
            <div
                class="flex items-center justify-between pb-4 lg:pb-0 border-b lg:border-b-0 border-neutral-350">
              <button
                  class="flex items-center justify-between focus:outline-none">
                <div class="flex flex-col items-start">
                  <span class="text-xs font-medium text-white/80">Select Routines Category</span>
                  <div class="flex items-end space-x-2">
                    <span class="font-semibold mt-2">🌞WARM UP/DOWN</span>
                    <svg width="20px" height="20px" class="transition-all duration-300 ease-in-out -rotate-90">
                      <use xlink:href="/assets/svg/chevron.svg#svg"></use>
                    </svg>
                  </div>
                </div>
              </button>

              <button
                  type="button"
                  @click="showRoutines = false"
                  class="flex lg:hidden items-center justify-center text-sm font-semibold rounded-sm p-[7px] hover:bg-gold-950 border border-gold-550 hover:border-gold-950 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out"
              >
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/close.svg#svg"></use>
                </svg>
              </button>
            </div>

            <label for="only_my_routine"
                   class="flex items-center space-x-2 bg-neutral-800 text-sm text-gold-550 font-semibold rounded-sm px-4 py-3 cursor-pointer">
              <input type="checkbox" id="only_my_routine" name="only_my_routine"
                     class="bg-transparent border border-gold-550 accent-gold-550 w-4 h-4"/>
              <span>Only My Routines</span>
            </label>
          </div>

          <div
              class="w-full flex items-center space-x-2 rounded-sm bg-neutral-800 border border-neutral-350 text-neutral-250 placeholder:text-neutral-250 px-4 py-3">
            <svg width="16px" height="16px" class="shrink-0">
              <use xlink:href="/assets/svg/search.svg#svg"></use>
            </svg>
            <input type="text" placeholder="Search Routines"
                   class="w-full text-sm bg-transparent text-white focus:outline-none"/>
          </div>

          <div class="flex flex-wrap gap-2 w-full max-w-xl 2xl:max-w-2xl">
            <div
                class="inline-block whitespace-nowrap bg-blue-100 hover:bg-gold-950 active:bg-gold-950 text-sm text-neutral-800 rounded-sm px-2 py-1 transition-all duration-150 ease-in-out cursor-pointer">
              Dynamic mobility routines
            </div>
            <div
                class="inline-block whitespace-nowrap bg-blue-100 hover:bg-gold-950 active:bg-gold-950 text-sm text-neutral-800 rounded-sm px-2 py-1 transition-all duration-150 ease-in-out cursor-pointer">
              Neuro wake up routines
            </div>
            <div
                class="inline-block whitespace-nowrap bg-blue-100 hover:bg-gold-950 active:bg-gold-950 text-sm text-neutral-800 rounded-sm px-2 py-1 transition-all duration-150 ease-in-out cursor-pointer">
              Warm Down Routines
            </div>
            <div
                class="inline-block whitespace-nowrap bg-blue-100 hover:bg-gold-950 active:bg-gold-950 text-sm text-neutral-800 rounded-sm px-2 py-1 transition-all duration-150 ease-in-out cursor-pointer">
              Warm Up Routines
            </div>
          </div>
        </div>

        <div class="bg-neutral-800 rounded-sm">
          <div class="flex items-center bg-neutral-850 text-xs text-white/80 px-4 py-2">
            <span class="flex-1">Routine Name</span>
            <span class="flex-1 text-center">Action</span>
          </div>
          <div class="flex flex-col space-y-4 pt-3 px-4 pb-4">
            <div class="w-full flex flex-col space-y-3">
              <div class="flex items-center justify-between">
                <span class="font-medium">Balance-Mobility WU #1</span>
                <div class="flex items-center space-x-2">
                  <button
                      class="flex items-center justify-center text-sm font-semibold rounded-sm p-[7px] hover:bg-gold-950 border border-gold-550 hover:border-gold-950 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out">
                    <svg width="16px" height="16px">
                      <use xlink:href="/assets/svg/eye.svg#svg"></use>
                    </svg>
                  </button>

                  <button
                      class="flex items-center justify-center text-sm font-semibold rounded-sm p-1.5 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all duration-150 ease-in-out">
                    <svg width="20px" height="20px">
                      <use xlink:href="/assets/svg/plus.svg#svg"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <hr class="border border-neutral-350"/>
            </div>

            <div class="w-full flex flex-col space-y-3">
              <div class="flex items-center justify-between">
                <span class="font-medium">Balance-Mobility WU #2</span>
                <div class="flex items-center space-x-2">
                  <button
                      class="flex items-center justify-center text-sm font-semibold rounded-sm p-[7px] hover:bg-gold-950 border border-gold-550 hover:border-gold-950 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out">
                    <svg width="16px" height="16px">
                      <use xlink:href="/assets/svg/eye.svg#svg"></use>
                    </svg>
                  </button>

                  <button
                      class="flex items-center justify-center text-sm font-semibold rounded-sm p-1.5 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all duration-150 ease-in-out">
                    <svg width="20px" height="20px">
                      <use xlink:href="/assets/svg/tick.svg#svg"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <hr class="border border-neutral-350"/>
            </div>

            <div class="w-full flex flex-col space-y-3">
              <div class="flex items-center justify-between">
                <span class="font-medium">Balance-Mobility WU #3</span>
                <div class="flex items-center space-x-2">
                  <button
                      class="flex items-center justify-center text-sm font-semibold rounded-sm p-[7px] hover:bg-gold-950 border border-gold-550 hover:border-gold-950 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out">
                    <svg width="16px" height="16px">
                      <use xlink:href="/assets/svg/eye.svg#svg"></use>
                    </svg>
                  </button>

                  <button
                      class="flex items-center justify-center text-sm font-semibold rounded-sm p-1.5 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all duration-150 ease-in-out">
                    <svg width="20px" height="20px">
                      <use xlink:href="/assets/svg/plus.svg#svg"></use>
                    </svg>
                  </button>
                </div>
              </div>
              <hr class="border border-neutral-350"/>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
        class="flex-1 flex flex-col overflow-y-scroll items-center space-y-8 p-4"
        :class="{'border-l border-neutral-350': showExercises || showRoutines}">
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
          <div v-if="show === 'groups'" class="absolute top-40 md:top-20 inset-x-0 flex justify-center z-40"
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
          <div v-if="show === 'calendar'" class="absolute top-40 md:top-20 inset-x-0 flex justify-center z-40"
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

        <div class="flex md:space-x-4 items-center">
          <div class="relative">
            <button
                type="button"
                @click="openedDropdownOne = !openedDropdownOne"
                class="flex items-center justify-center text-sm font-semibold rounded-sm p-[7px] hover:bg-gold-950 border border-gold-550 hover:border-gold-950 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out"
            >
              <svg width="20px" height="20px">
                <use xlink:href="/assets/svg/dots.svg#svg"></use>
              </svg>
            </button>

            <transition enter-active-class="transition ease-out duration-100"
                        enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100"
                        leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100"
                        leave-to-class="transform opacity-0 scale-95">
              <div
                  v-if="openedDropdownOne"
                  class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-neutral-800 border border-neutral-350 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div class="py-1" role="none">
                  <a href="#"
                     class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Copy
                    Link</a>
                  <a href="#"
                     class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Share
                    Link</a>
                </div>
              </div>
            </transition>
          </div>

          <div
              class="md:relative fixed bottom-0 inset-x-0 flex justify-center bg-neutral-900 md:bg-transparent p-4 md:p-0 z-40">
            <div class="flex space-x-4 w-full max-w-xl 2xl:max-w-2xl">
              <button
                  class="flex-1 md:flex-0 flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-[7px] hover:bg-gold-950 border border-gold-550 hover:border-gold-950 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/share.svg#svg"></use>
                </svg>
                <span>Share</span>
              </button>

              <button
                  class="flex-1 md:flex-0 flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all duration-150 ease-in-out">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/circle-tick.svg#svg"></use>
                </svg>
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col space-y-4 w-full max-w-xl 2xl:max-w-2xl">
        <Accordion label="WEIGHTS (DAY 1)">
        </Accordion>

        <Accordion>
          <div class="flex flex-col space-y-4 md:space-y-8 items-center px-4 md:px-8 py-8 md:pb-8">
            <input placeholder="Add Note/Subtitle"
                   class="w-full text-neutral-800 placeholder:text-gray-400 rounded-sm text-sm focus:outline-none px-4 py-2"/>

            <div class="flex items-center space-x-4 w-full md:w-auto">
              <button
                  @click="showExercises = true; showRoutines = false"
                  class="w-full md:w-auto flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all duration-150 ease-in-out">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>Add Exercise</span>
              </button>

              <button
                  @click="showExercises = false; showRoutines = true"
                  class="w-full md:w-auto flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all duration-150 ease-in-out">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>Add Routine</span>
              </button>
            </div>
          </div>
        </Accordion>

        <Accordion label="WEIGHT TONUS">
          <div class="flex flex-col space-y-4 md:space-y-8 px-4 py-8 md:p-8">
            <div class="relative flex justify-center">
              <div class="group relative">
                <span class="font-semibold">WARM-UP</span>
                <div class="absolute left-full top-1 hidden group-hover:block pl-2 cursor-pointer">
                  <svg width="16px" height="16px">
                    <use xlink:href="/assets/svg/pencil.svg#svg"></use>
                  </svg>
                </div>
              </div>
              <div class="absolute right-4 flex items-center inset-y-0">
                <div class="relative w-5 h-5">
                  <button
                      type="button"
                      @click="openedDropdownTwo = !openedDropdownTwo"
                  >
                    <svg width="20px" height="20px">
                      <use xlink:href="/assets/svg/dots.svg#svg"></use>
                    </svg>
                  </button>

                  <transition enter-active-class="transition ease-out duration-100"
                              enter-from-class="transform opacity-0 scale-95"
                              enter-to-class="transform opacity-100 scale-100"
                              leave-active-class="transition ease-in duration-75"
                              leave-from-class="transform opacity-100 scale-100"
                              leave-to-class="transform opacity-0 scale-95">
                    <div
                        v-if="openedDropdownTwo"
                        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-neutral-800 border border-neutral-350 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div class="py-1" role="none">
                        <a href="#"
                           class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Copy
                          Link</a>
                        <a href="#"
                           class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Share
                          Link</a>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>
            </div>

            <div class="flex flex-col space-y-4">
              <div class="flex flex-col space-y-2 p-4 bg-gray-100 text-neutral-800 rounded-sm">
                <div class="flex items-center justify-between">
                  <span class="font-medium">Pre-Weights Warm Up #3 (0)</span>

                  <div class="relative w-5 h-5">
                    <button
                        type="button"
                        @click="openedDropdownThree = !openedDropdownThree"
                    >
                      <svg width="20px" height="20px">
                        <use xlink:href="/assets/svg/dots.svg#svg"></use>
                      </svg>
                    </button>

                    <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                      <div
                          v-if="openedDropdownThree"
                          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-neutral-800 border border-neutral-350 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                          <a href="#"
                             class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Copy
                            Link</a>
                          <a href="#"
                             class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Share
                            Link</a>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>

                <div class="flex flex-col items-start">
                  <div
                      class="peer group w-full flex items-center bg-white text-neutral-800 placeholder:text-gray-400 rounded-sm overflow-hidden text-sm">
                    <input placeholder="Add Sets/Reps/Notes if any..." v-model="inputText"
                           class="w-full bg-transparent focus:outline-none px-4 py-2 border focus-within:border-transparent border-gray-200"/>
                    <button
                        v-if="inputText.length > 0"
                        class="bg-gold-550 text-neutral-800 border border-gold-550 font-medium py-2 px-4">
                      Done
                    </button>
                  </div>
                  <div
                      v-if="inputText.length > 0"
                      class="flex items-center space-x-4 text-xs md:text-sm text-white/80 font-medium bg-neutral-900 divide-x divide-neutral-350 px-4 py-2">
                    <div>
                      <input type="radio" id="text_note" name="custom_type" class="peer hidden" checked/>
                      <label for="text_note"
                             class="font-medium hover:text-white peer-checked:text-gold-550 cursor-pointer">Text
                        Note</label>
                    </div>
                    <div class="pl-4">
                      <input type="radio" id="header" name="custom_type" class="peer hidden"/>
                      <label for="header"
                             class="font-medium hover:text-white peer-checked:text-gold-550 cursor-pointer">Header</label>
                    </div>
                    <div class="pl-4">
                      <input type="radio" id="sub_header" name="custom_type" class="peer hidden"/>
                      <label for="sub_header"
                             class="font-medium hover:text-white peer-checked:text-gold-550 cursor-pointer">SubHeader</label>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex items-center justify-between pr-4">
                <div class="group relative">
                  <span class="font-semibold">Circuit #1</span>
                  <div class="absolute left-full top-1 hidden group-hover:block pl-2 cursor-pointer">
                    <svg width="16px" height="16px">
                      <use xlink:href="/assets/svg/pencil.svg#svg"></use>
                    </svg>
                  </div>
                </div>
                <div class="relative w-5 h-5">
                  <button
                      type="button"
                      @click="openedDropdownFour = !openedDropdownFour"
                  >
                    <svg width="20px" height="20px">
                      <use xlink:href="/assets/svg/dots.svg#svg"></use>
                    </svg>
                  </button>

                  <transition enter-active-class="transition ease-out duration-100"
                              enter-from-class="transform opacity-0 scale-95"
                              enter-to-class="transform opacity-100 scale-100"
                              leave-active-class="transition ease-in duration-75"
                              leave-from-class="transform opacity-100 scale-100"
                              leave-to-class="transform opacity-0 scale-95">
                    <div
                        v-if="openedDropdownFour"
                        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-neutral-800 border border-neutral-350 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                        role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                      <div class="py-1" role="none">
                        <a href="#"
                           class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Copy
                          Link</a>
                        <a href="#"
                           class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Share
                          Link</a>
                      </div>
                    </div>
                  </transition>
                </div>
              </div>

              <div class="flex flex-col space-y-4 p-4 bg-neutral-900 text-white rounded-sm">
                <div class="flex items-center justify-between">
                  <span class="font-medium">Box drop double hurdle rebound</span>
                  <div class="relative h-5 w-5">
                    <button
                        type="button"
                        @click="openedDropdownFive = !openedDropdownFive"
                    >
                      <svg width="20px" height="20px">
                        <use xlink:href="/assets/svg/dots.svg#svg"></use>
                      </svg>
                    </button>

                    <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                      <div
                          v-if="openedDropdownFive"
                          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-neutral-800 border border-neutral-350 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                          <a href="#"
                             class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Copy
                            Link</a>
                          <a href="#"
                             class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Share
                            Link</a>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>
                <span class="text-xs text-white/80 pl-4">4x4 (first 2 sets controlled down-up and raise on toes/last two sets explosive up) 90-140kg</span>
              </div>

              <div class="flex flex-col space-y-3 p-4 bg-neutral-900 text-white rounded-sm">
                <div class="flex items-center justify-between">
                  <span class="font-medium">Single Leg Hurdle Hops</span>
                  <div class="relative h-5 w-5">
                    <button
                        type="button"
                        @click="openedDropdownSix = !openedDropdownSix"
                    >
                      <svg width="20px" height="20px">
                        <use xlink:href="/assets/svg/dots.svg#svg"></use>
                      </svg>
                    </button>

                    <transition enter-active-class="transition ease-out duration-100"
                                enter-from-class="transform opacity-0 scale-95"
                                enter-to-class="transform opacity-100 scale-100"
                                leave-active-class="transition ease-in duration-75"
                                leave-from-class="transform opacity-100 scale-100"
                                leave-to-class="transform opacity-0 scale-95">
                      <div
                          v-if="openedDropdownSix"
                          class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-sm bg-neutral-800 border border-neutral-350 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                          role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                        <div class="py-1" role="none">
                          <a href="#"
                             class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Copy
                            Link</a>
                          <a href="#"
                             class="block hover:bg-neutral-900 px-4 py-2 text-sm transition-all duration-150 ease-in-out">Share
                            Link</a>
                        </div>
                      </div>
                    </transition>
                  </div>
                </div>

                <div class="flex flex-col items-start">
                  <div
                      class="peer group w-full flex items-center bg-white text-neutral-800 placeholder:text-gray-400 rounded-sm overflow-hidden text-sm">
                    <input placeholder="Add Sets/Reps/Notes if any..." v-model="inputTextTwo"
                           class="w-full bg-transparent focus:outline-none px-4 py-2 border focus-within:border-transparent border-gray-200"/>
                    <button
                        v-if="inputTextTwo.length > 0"
                        class="bg-gold-550 text-neutral-800 border border-gold-550 font-medium py-2 px-4">
                      Done
                    </button>
                  </div>
                  <div
                      v-if="inputTextTwo.length > 0"
                      class="flex items-center space-x-4 text-xs md:text-sm text-white/80 font-medium bg-neutral-900 divide-x divide-neutral-350 px-4 py-2">
                    <div>
                      <input type="radio" id="text_note" name="custom_type" class="peer hidden" checked/>
                      <label for="text_note"
                             class="font-medium hover:text-white peer-checked:text-gold-550 cursor-pointer">Text
                        Note</label>
                    </div>
                    <div class="pl-4">
                      <input type="radio" id="header" name="custom_type" class="peer hidden"/>
                      <label for="header"
                             class="font-medium hover:text-white peer-checked:text-gold-550 cursor-pointer">Header</label>
                    </div>
                    <div class="pl-4">
                      <input type="radio" id="sub_header" name="custom_type" class="peer hidden"/>
                      <label for="sub_header"
                             class="font-medium hover:text-white peer-checked:text-gold-550 cursor-pointer">SubHeader</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex self-center items-center space-x-4 w-full md:w-auto ">
              <button
                  class="w-full md:w-auto flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all duration-150 ease-in-out">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>Add Exercise</span>
              </button>

              <button
                  class="w-full md:w-auto flex space-x-1 items-center justify-center text-sm font-semibold rounded-sm px-4 py-2 bg-gold-550 hover:bg-gold-950 text-neutral-800 transition-all duration-150 ease-in-out">
                <svg width="20px" height="20px">
                  <use xlink:href="/assets/svg/plus.svg#svg"></use>
                </svg>
                <span>Add Routine</span>
              </button>
            </div>
          </div>
        </Accordion>
      </div>

      <button
          class="w-full md:w-auto max-w-xl 2xl:max-w-2xl flex space-x-3 items-center justify-center font-semibold rounded-sm px-8 py-4 border border-neutral-350 hover:border-gold-950 bg-neutral-800 hover:bg-gold-950 text-gold-550 hover:text-neutral-800 transition-all duration-150 ease-in-out">
        <svg width="24px" height="24px">
          <use xlink:href="/assets/svg/plus-big.svg#svg"></use>
        </svg>
        <span>Add more block to this to day</span>
      </button>

      <!-- Helps to create empty spacing so that content does not get overlapped by save/share buttons in mobile view -->
      <!-- Not a clean approach -->
      <div class="md:hidden pb-14 md:pb-0"></div>
    </div>
  </MainLayout>
</template>

<script setup>
import {ref} from "vue";
import MainLayout from "./layouts/Main.vue";
import GroupSelector from "./components/groupSelector/Index.vue";
import Calendar from "./components/calendar/Index.vue";
import Accordion from "./components/Accordion.vue";

const show = ref('');
const inputText = ref('');
const inputTextTwo = ref('');
const openedDropdownOne = ref(false);
const openedDropdownTwo = ref(false);
const openedDropdownThree = ref(false);
const openedDropdownFour = ref(false);
const openedDropdownFive = ref(false);
const openedDropdownSix = ref(false);

const showExercises = ref(false);
const showRoutines = ref(false);
</script>
