<template>
  <div class="py-5 flex flex-col">
    <div v-if="title" class="font-devanagari !text-[#347571] font-bold md:text-5xl lg:text-5xl xl:text-5xl text-4xl text-center">
      {{ title }}
    </div>
    <div v-if="des" class="mt-2 md:text-7xl lg:text-xl xl:text-xl text-base text-center text-black">
      {{ des }}
    </div>
  </div>
</template>
<script setup>
import { reactive, computed } from "vue";
const props = defineProps(["title", "des"]);
const { title, des } = props;
</script>
