<template>
  <div
      class="flex flex-col space-y-2 border-l-4 border-gold-550 pl-[12px] py-4 pr-4 rounded-sm"
      :class="{
          'bg-white text-neutral-800': light,
          'bg-neutral-900 text-white': !light,
      }"
  >
    <div class="flex items-center justify-between">
      <span>{{ header }}</span>
      <button>
        <svg width="20px" height="20px">
          <use xlink:href="/assets/svg/dots.svg#svg"></use>
        </svg>
      </button>
    </div>

    <slot/>
  </div>
</template>

<script setup>
defineProps({
  header: String,
  light: {
    type: Boolean,
    default: true,
  }
})
</script>
