<!-- <template>
  <form ref="form" @submit.prevent="sendEmail">
    <div class="bg-[#f7fdf3]">
      <div class="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div class="text-gray-500 rounded-3xl w-full overflow-hidden">

          <Title :des="'We are always happy to hear from you. To reach us on social media'" :title="'Contact'" />
          <div class="md:flex w-full">
            <div class="hidden md:block w-1/2 py-10 px-10">
              <iframe width="100%" height="100%"
                src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d30258.615897833304!2d73.947907!3d18.5592913!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3bc2c37026731617%3A0xda5776ed99c1ca0a!2sGRANDSTAND%20II%20Gate%20No.%203%20Near%2C%20Eon%20Free%20Zone%20Rd%2C%20opposite%20to%20Forest%20County%2C%20Tulaja%20Bhawani%20Nagar%2C%20Kharadi%20Pune%2C%20Maharashtra%20411014!3m2!1d18.559291299999998!2d73.947907!5e0!3m2!1sen!2sin!4v1684731835485!5m2!1sen!2sin"></iframe>
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
                    <div class="w-full ">
                      <div class="!flex-wrap   mb-4" v-for="radio in radioOPts">
                        <input id="default-radio-1" type="radio" :value="radio" name="who_im"
                          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label for="default-radio-1" class="ml-2 text-sm font-medium text-black">{{ radio }}</label>
                      </div>
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

                    <textarea id="message" rows="4" name="message"
                      class="w-full -ml-10 p-2 rounded-lg border-2 border-gray-200 outline-none"></textarea>
                  </div>
                </div>

                <div class="flex !items-end">
                  <input type="submit" value="SEND MESSAGE"
                    class="text-white px-4 py-2 !bg-[#347571] font-bold mt-10 w-full !cursor-pointer" />
                </div>
              </div>
              <div
                class="flex items-center justify-center font-bold top-0 bottom-0 right-0 left-0 bg-brandGray brandGreen fixed z-40 text-brandGreen text-2xl"
                v-if="saving">
                Sending...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
  <section class="py-6 dark:bg-gray-800 dark:text-gray-50">
    <div class="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
      <div class="py-6 md:py-0 md:px-6">
        <h1 class="text-4xl font-bold">Get in touch</h1>
        <p class="pt-2 pb-4">Fill in the form to start a conversation</p>
        <div class="space-y-4">
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clip-rule="evenodd"></path>
            </svg>
            <span>Fake address, 9999 City</span>
          </p>
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path
                d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z">
              </path>
            </svg>
            <span>123456789</span>
          </p>
          <p class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 mr-2 sm:mr-6">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <span>contact@business.com</span>
          </p>
        </div>
      </div>
      <form novalidate="" class="flex flex-col py-6 space-y-6 md:py-0 md:px-6 ng-untouched ng-pristine ng-valid">
        <label class="block">
          <span class="mb-1">Full name</span>
          <input type="text" placeholder="Leroy Jenkins"
            class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800">
        </label>
        <label class="block">
          <span class="mb-1">Email address</span>
          <input type="email" placeholder="leroy@jenkins.com"
            class="block w-full rounded-md shadow-sm focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800">
        </label>
        <label class="block">
          <span class="mb-1">Message</span>
          <textarea rows="3"
            class="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:bg-gray-800"></textarea>
        </label>
        <button type="button"
          class="self-center px-8 py-3 text-lg rounded focus:ring hover:ring focus:ring-opacity-75 dark:bg-violet-400 dark:text-gray-900 focus:ring-violet-400 hover:ring-violet-400">Submit</button>
      </form>
    </div>
  </section>
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
</script> -->




<nav class="bg-white border-gray-200 dark:bg-gray-900">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="https://flowbite.com/" class="flex items-center">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
        </li>
        <li>
          <a href="#" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
