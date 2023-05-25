<template>
  <section class="p-5 py-7 mx-auto !-z-10">
    <!-- <div class="font-devanagari text-brandGreen font-bold text-4xl m-5 text-center !rounded-2xl">
      What our customers say
    </div> -->
    <Title :title="' What our customers say'" />
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 gap-2">
      <div class="swiper-container !overflow-hidden">
        <div class="swiper-wrapper">
          <div class="swiper-slide bg-[#ECF8E5]" v-for="item in slideItems">
            <blockquote class="p-8">
              <p class="relative mt-4 text-[#347571]">
                <span class="text-xl text-[#347571]">&ldquo;</span>

                {{ item.desc }}

                <span class="text-xl">&rdquo;</span>
              </p>

              <figcaption class="flex items-center justify-center mt-6 space-x-3">
                <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                  <div class="pr-3 font-medium text-gray-900 dark:text-white">Micheal Gough</div>
                  <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div>
                </div>
              </figcaption>
            </blockquote>
          </div>
        </div>

        <div class="swiper-pagination !relative !bottom-0 mt-12"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Title from "./Title.vue";
const slideItems = [
  {
    img: "https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80",
    title: "test",
    subTitle: "subTitle",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: "https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80",
    title: "test",
    subTitle: "subTitle",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    img: "https://images.unsplash.com/photo-1508280756091-9bdd7ef1f463?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1832&q=80",
    title: "test",
    subTitle: "subTitle",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];
document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 8,
    autoplay: {
      delay: 8000,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.5,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
</script>
