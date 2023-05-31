
<template>
  <!-- a lot of the lines are just svg text, actual html is simple 
A sample contact us page form written with tailwind css
Illustration from undraw.co by the amazing Katerina Limpitsouni
-->

  <body class="bg-[#ECF8E5] text-gray-100 p-5" id="contact_us">

    <div
      class="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-white text-gray-900 rounded-lg shadow-lg">
      <div class="flex flex-col justify-between !items-center">
        <div>
          <h2 class="text-4xl lg:text-5xl font-bold leading-tight !text-[#347571]">Contact</h2>

          <div class="mt-5">

            <div class="space-y-4 text-[#347571]">
              <a href="https://goo.gl/maps/eMh6extXzykN2je79" target="_blank" class="flex items-center underline">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clip-rule="evenodd"></path>
                </svg>
                <span>Bharatrath, Shop No-2 Dynamic Grandstand II <br /> Opposite Forest County Gate No -3 Kharadi 411014</span>
              </a>
              <p class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                  <path
                    d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
                  </path>
                </svg>
                <span>+91 8530231999</span>
              </p>
              <p class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>info@bharatrath.com</span>
              </p>
            </div>
          </div>
        </div>

      </div>
      <div class="">
        <form ref="form" @submit.prevent="sendEmail">
          <div v-if="!saving" class="">
            <div class="px-3 mb-5">
              <span class="uppercase text-sm text-gray-600 font-bold">Name</span>

              <input type="text" name="user_name"
                class="bg-gray-300 text-gray-900 w-full p-2 rounded-lg border-2 border-gray-200 outline-none" />

            </div>
            <div class="px-3 mb-5">
              <span class="uppercase text-sm text-gray-600 font-bold">Email</span>

              <input type="email" name="user_email" class="w-full bg-gray-300 p-2 rounded-lg border-2 border-gray-200 outline-none" />

            </div>

            <div class="w-full px-3 mb-5">
              <span class="uppercase text-sm text-gray-600 font-bold">Who I Am</span>

              <div class="w-full !flex !flex-wrap ">
                <div class="!md:w-1/2 lg:w-1/2 xl:w-1/2 w-full" v-for="radio in radioOPts">
                  <input id="default-radio-1 " type="radio" :value="radio" name="who_im" class=" " />
                  <label for="default-radio-1 " class="!ml-2">{{ radio }}</label>
                </div>

              </div>
            </div>


            <div class="px-3 mb-5">
              <span class="uppercase text-sm text-gray-600 font-bold">Phone</span>

              <input type="phone" name="phone" class="w-full bg-gray-300 p-2 rounded-lg border-2 border-gray-200 outline-none" />

            </div>

            <div class="px-3 mb-5">
              <div for="" class="text-gray-900 text-base font-semibold mb-2">Message</div>


              <textarea id="message" rows="4" name="message"
                class="w-full bg-gray-300 p-2 rounded-lg border-2 border-gray-200 outline-none"></textarea>

            </div>

            <div class="flex !items-end">
              <input type="submit" value="SEND MESSAGE" class="text-white px-4 py-2 !bg-[#347571] font-bold mt-10 w-full !cursor-pointer" />
            </div>
          </div>
          <div
            class="flex items-center justify-center font-bold top-0 bottom-0 right-0 left-0 bg-brandGray brandGreen fixed z-40 text-brandGreen text-2xl"
            v-if="saving">
            Sending...
          </div>
        </form>

      </div>
    </div>
  </body>
</template>
<script>
import emailjs from "@emailjs/browser";
import Title from "./Title.vue";
export default {
  data() {
    return {
      radioOPts: ["Farmer Producer Orgaisation", "Retailer", "Foundation/Insitution", "distributor", "Mahila Bachat Gat", "Manufacturer"],

      saving: false,
    };
  },
  components: {
    Title,
  },
  methods: {
    sendEmail() {
      debugger;


      this.saving = true;
      emailjs.sendForm("service_fjsjr6m", "template_4m2irqk", this.$refs.form, "GZdvWFXQaYtk2G7oE").then(

        (result) => {
          debugger;
          this.saving = false;
          this.$refs.form.reset();
          alert("SUCCESS!");
        },
        (error) => {
          debugger;
          this.saving = false;
          alert("FAILED...");
        }
      );
    },
  },
};
</script>
