<template>
  <form ref="form" @submit.prevent="sendEmail">
    <div class="bg-[#f7fdf3]">
      <div class="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div class="text-gray-500 rounded-3xl w-full overflow-hidden">
          <!-- <div class="font-devanagari text-brandGreen font-bold text-4xl m-5 text-center">
            Contact Us
          </div>
          <div class="flex flex-col items-center">
            <div>We will always be happy to hear from you. To reach us on social media!</div>
          </div> -->
          <Title :des="'We will always be happy to hear from you. To reach us on social media'" :title="'Contact'" />
          <div class="md:flex w-full">
            <div class="hidden md:block w-1/2 py-10 px-10">
              <iframe
                width="100%"
                height="100%"
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d30258.615897833304!2d73.947907!3d18.5592913!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c37026731617%3A0xda5776ed99c1ca0a!2sGRANDSTAND%20II%20Gate%20No.%203%20Near%2C%20Eon%20Free%20Zone%20Rd%2C%20opposite%20to%20Forest%20County%2C%20Tulaja%20Bhawani%20Nagar%2C%20Kharadi%20Pune%2C%20Maharashtra%20411014!3m2!1d18.559291299999998!2d73.947907!5e0!3m2!1sen!2sin!4v1684731835485!5m2!1sen!2sin"
              ></iframe>
            </div>
            <div class="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div class="!text-lg text-black">
                <div class="!font-semibold">Send us a Message!</div>
                We will always be happy to hear from you.
              </div>
              <br />
              <div v-if="!saving" class="">
                <div class="px-3 mb-5">
                  <div for="" class="text-black text-base font-semibold mb-2">Name</div>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input type="text" name="user_name" class="w-full -ml-10 p-2 rounded-lg border-2 border-gray-200 outline-none" />
                  </div>
                </div>
                <div class="px-3 mb-5">
                  <div for="" class="text-black text-base font-semibold mb-2">Email</div>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input type="email" name="user_email" class="w-full -ml-10 p-2 rounded-lg border-2 border-gray-200 outline-none" />
                  </div>
                </div>

                <div class="w-full px-3 mb-5">
                  <div for="" class="text-black text-base font-semibold mb-2">Who I am</div>
                  <div class="flex flex-col">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-email-outline text-gray-400 text-lg"></i>
                    </div>

                    <div class="flex items-center mb-4" v-for="radio in radioOPts">
                      <input
                        id="default-radio-1"
                        type="radio"
                        :value="radio"
                        name="who_im"
                        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label for="default-radio-1" class="ml-2 text-sm font-medium text-black">{{ radio }}</label>
                    </div>
                  </div>
                </div>

                <div class="px-3 mb-5">
                  <div for="" class="text-black text-base font-semibold mb-2">Pincode</div>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input type="number" name="pincode" class="w-full -ml-10 p-2 rounded-lg border-2 border-gray-200 outline-none" />
                  </div>
                </div>

                <div class="px-3 mb-5">
                  <div for="" class="text-black text-base font-semibold mb-2">Phone</div>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>
                    <input type="phone" name="phone" class="w-full -ml-10 p-2 rounded-lg border-2 border-gray-200 outline-none" />
                  </div>
                </div>

                <div class="px-3 mb-5">
                  <div for="" class="text-black text-base font-semibold mb-2">Message</div>
                  <div class="flex">
                    <div class="w-10 z-10 pl-1 mt-3 text-center pointer-events-none flex items-center justify-center">
                      <i class="mdi mdi-account-outline text-gray-400 text-lg"></i>
                    </div>

                    <textarea
                      id="message"
                      rows="4"
                      name="message"
                      class="w-full -ml-10 p-2 rounded-lg border-2 border-gray-200 outline-none"
                    ></textarea>
                  </div>
                </div>

                <div class="flex !items-end">
                  <input type="submit" value="SEND MESSAGE" class="text-white px-4 py-2 !bg-[#347571] font-bold mt-10 w-full !cursor-pointer" />
                </div>
              </div>
              <div
                class="flex items-center justify-center font-bold top-0 bottom-0 right-0 left-0 bg-brandGray brandGreen fixed z-40 text-brandGreen text-2xl"
                v-if="saving"
              >
                Sending...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import emailjs from "@emailjs/browser";
import Title from "./Title.vue";
export default {
  data() {
    return {
      radioOPts: ["Farmer", "Farmer Coperative", "supplier", "distributor", "customer"],

      saving: false,
    };
  },
  components: {
    Title,
  },
  methods: {
    sendEmail() {
      debugger;
      this.$refs.form.reset();

      this.saving = true;
      emailjs.sendForm("service_zcwceqj", "template_16tua1x", this.$refs.form, "5aCh8vb8IqfuUz7P4").then(
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
