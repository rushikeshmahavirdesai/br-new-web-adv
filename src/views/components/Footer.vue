<template>
  <footer aria-label="Site Footer" class="bg-[rgba(236, 248, 229,.4)] !border-t-2">
    <div class="max-w-screen-xl px-4 py-16 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
      <div class="grid grid-cols-1 pt-8 border-t border-gray-100 gap-20 sm:grid-cols-2 lg:grid-cols-3 lg:pt-16">
        <div v-for="link in footerLinks">
          <p class="font-medium text-[#347571] text-xl">{{ link.title }}</p>

          <nav aria-label="Footer Navigation - Services" class="mt-6">
            <ul class="space-y-4 text-sm">
              <li v-for="anchor in link.links">
                <i v-if="anchor.icon" :class="anchor.icon"></i>
                <a href="#" class="text-gray-700 transition hover:opacity-75">
                  {{ anchor.title }}
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <p class="text-base text-[#347571] text-center font-bold border-t-2 pt-2">&copy;Ashti Ventures Private Limited. All Rights Reserved.</p>
    </div>
  </footer>
</template>
<script setup>
const footerLinks = [
  {
    title: "Navigation Links",
    links: [
      {
        title: "About",
      },
      {
        title: "Team",
      },
      {
        title: "FAQs",
      },
    ],
  },
  {
    title: "Follow Us",
    links: [
      {
        icon: "fa fa-facebook mr-2 text-[#347571]",
        title: "Bharatrath",
      },
      {
        icon: "fa fa-linkedin mr-2 text-[#347571]",
        title: "Bharatrath",
      },
      {
        icon: "fa fa fa-twitter mr-2 text-[#347571]",
        title: "Bharatrath",
      },
    ],
  },
  {
    title: "Contact Us",
    links: [
      {
        icon: "fa fa-phone-square mr-2 text-[#347571]",
        title: "+91 8530231999",
      },
      {
        icon: "fa fa-envelope mr-2 text-[#347571]",
        title: "info@bharatrath.com",
      },
      {
        icon: "fa fa-address-book mr-2 text-[#347571]",
        title: "Bharatrath, Shop No-2 Dynamic Grandstand II Opposite Forest County Gate No -3 Kharadi 411014",
      },
    ],
  },
];
</script>
