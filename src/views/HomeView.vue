<template>
 
    <Navbar /> 
    <div class="!h-10"></div>
 <Hero /> 
  
  <!-- <section class="banner  bg-[#ECF8E5] !md:pt-10 !lg:pt-10 !xl:pt-10 pt-5" >
   <div class="sm:py-5 !py-7 pb-5 " >
     <div class="grid grid-cols-1 md:grid-cols-2 !gap-6 lg:grid-cols-2 mx-auto !w-5/6 pb-12">
        <div class="flex flex-col items-center  md:items-start  lg:items-start   mb-10">
        <div class="width !mb-8 "><img src="../assets/flaticon.webp" alt="" /></div>
       <div class="">
          <div class="font-devanagari text-brandGree md:text-7xl  lg:text-7xl xl:text-7xl  text-3xl font-bold">
          आपका का Digital सारथी
        </div>
        <div class="font-devanagari text-[#347571]  md:text-4xl  lg:text-4xl xl:text-4xl  text-1xl  mt-4">
          अब मिनटों में अपने बिज़नेस को बनाये Digital
        </div>
       </div>
         
      </div>
      <div class="flex flex-col items-center">
        <img src="../assets/banner_image.svg" alt="" class="sm:w-30 sm:h-30 sm:w-96 sm:h-96" />
    
      </div>
     </div>
        <div class="font-devanagari text-[#347571]  md:text-2xl px-5  lg:text-2xl xl:text-2xl  text-1xl flex flex-col items-center ">
        <div  class="text-center">e-Commerce | GST Billing | POS | Inventory Management | Digital Sales</div>
       
        <a
          class="rounded-full bg-brandGreen px-5 py-2 text-white font-bold mt-10"
          href="https://apps.bharatrath.com/bos/login"
          target="blank"
          >Start Now</a
        >
       
      </div>
    </div>
  </section> -->

  <section class="brands mt-4 mb-20 p-5">
    <!-- <div class="font-devanagari text-[#347571]  font-bold !sm:text-base  text-2xl my-5 text-center">
      भारत के Businesses का एक ही भरोसा
    </div> -->
    <Title :title="'भारत के Businesses का एक ही भरोसा'"/>
    <div class="slider">
      <div class="slide-track2">
        <div class="slide">
          <img src="../assets/client-logos/agro-naturals.webp" alt="" />
        </div>
        <div class="slide bg-purple-500"><img src="../assets/client-logos/anks.webp" alt="" /></div>
        <div class="slide bg-blue-500">
          <img src="../assets/client-logos/bandhanfarms.webp" alt="" />
        </div>
        <div class="slide bg-green-500">
          <img src="../assets/client-logos/bnjstore.webp" alt="" />
        </div>
        <div class="slide bg-pink-500">
          <img src="../assets/client-logos/completenutrition.webp" alt="" />
        </div>

        <!-- same 5 slides doubled (duplicate)-->
        <div class="slide"><img src="../assets/client-logos/dhule.webp" alt="" /></div>
        <div class="slide bg-purple-500">
          <img src="../assets/client-logos/goratna.webp" alt="" />
        </div>
        <div class="slide bg-blue-500">
          <img src="../assets/client-logos/gud2eat.webp" alt="" />
        </div>
        <div class="slide bg-green-500">
          <img src="../assets/client-logos/mishtibox.webp" alt="" />
        </div>
        <div class="slide bg-pink-500">
          <img src="../assets/client-logos/sarovar.webp" alt="" />
        </div>
        <!-- same 5 slides tripled (duplicate 2)-->
        <div class="slide"><img src="../assets/client-logos/shreyas.webp" alt="" /></div>
        <div class="slide bg-purple-500">
          <img src="../assets/client-logos/whitefield.webp" alt="" />
        </div>
      </div>
    </div>
  </section>
  <div class="p-5 " id="features">
    <!-- <div class="font-devanagari text-[#347571]  font-bold text-2xl m-5 text-center">
      भारतरथ का World Class Software, भारत के Businesses के लिए
    </div> -->
    <Title :des="'भारत के Businesses के लिए'" :title="'भारतरथ का World Class Softwar'"/>
    <section class="features">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <div class="bg-[#f7fdf3] flex flex-col items-center w-full">
          <img src="../assets/features/website.png" alt="" class="p-5" />
          <div class="text-xl font-bold">e-Commerce Website</div>
          <div class="text-center p-5">
            मिनटों में अपना खुद का e-Commerce business start कीजिये. Digital India के इस दौर में, अब
            आप भी किसी भी बड़ी company को competition दे सकते है.
          </div>
          <a href="#e-Commerce_Website"><img src="../assets/features/down-button.png" alt="" class="pt-2 pb-5" /></a>
        </div>
        <div class="bg-[#ecf8e5] flex flex-col items-center w-full">
          <img src="../assets/features/billing.png" alt="" class="p-5" />
          <div class="text-xl font-bold">GST Billing System</div>
          <div class="text-center p-5">
            आपकी Shop हो या Warehouse, Distributorship हो या Production unit, भारतरथ आपके लिए लाये
            है GST billing - Retail POS और B2B Customer bills के लिए.
          </div>
          <a href="#Inventory_Management"><img src="../assets/features/down-button.png" alt="" class="pt-2 pb-5" /></a>
        </div>
        <div class="bg-[#dcf4ce] flex flex-col items-center w-full">
          <img src="../assets/features/inventory.png" alt="" class="p-5" />
          <div class="text-xl font-bold">Inventory Management</div>
          <div class="text-center p-5">
            एक ही Integrated Inventory से आपके सभी Sales Channels (e-Commerce, Shop, B2B, Whatsapp)
            को मैनेज कीजिये एक location से .
          </div>
          <a href="#Inventory_Management"><img src="../assets/features/down-button.png" alt="" class="pt-2 pb-5" /></a>
        </div>
      </div>
    </section>
  </div>

  <section class="process mt-4 mb-20 p-5" id="onboarding">
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2
          class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none t text-[#347571]  sm:text-4xl md:mx-auto"
        >
          <span class="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7"></circle>
                </pattern>
              </defs>
              <rect fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)" width="52" height="24"></rect>
            </svg>
          </span>
          आपके Business को Upgrade करने के 3 आसान Steps
        </h2>
        <p class="text-base text-[#347571]  md:text-lg">
          Email Account खोलने से भी आसान है, भारतरथ पर Digital Business बनाना
        </p>
      </div>
      <div class="grid  lg:grid-cols-3 sm:grid-cols-2 gap-20">
        <div>
          <div class="flex items-center justify-between mb-6">
            <p class="text-2xl font-bold !text-[#347571] ">Sign Up</p>
            <svg
              class="w-6 text-[#347571]  transform rotate-90 sm:rotate-0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
              <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
            </svg>
          </div>
          <p class="text-gray-600">
           <ul class="list-disc">
            <li>Talk to Bharatrath team</li>
            <li>Get a demo of our software</li>
            <li>Signup to create an account</li>
          </ul>
          </p>
        </div>
        <div>
          <div class="flex items-center justify-between mb-6">
            <p class="text-2xl font-bold !text-[#347571] ">Onboarding</p>
            <svg
              class="w-6 text-[#347571]  transform rotate-90 sm:rotate-0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
              <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
            </svg>
          </div>
          <p class="text-gray-600">
            <ul class="list-disc">
            <li>Bharatrath team will upload all your products</li>
            <li>Bharatrath team will create your website template</li>
            <li>Bharatrath team will make your website, POS and inventory system live</li>
          </ul>
          </p>
        </div>
        <div>
          <div class="flex items-center justify-between mb-6">
            <p class="text-2xl font-bold !text-[#347571] ">Go Live</p>
            <svg
              class="w-6 text-[#347571]  transform rotate-90 sm:rotate-0"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              viewBox="0 0 24 24"
            >
              <line fill="none" stroke-miterlimit="10" x1="2" y1="12" x2="22" y2="12"></line>
              <polyline fill="none" stroke-miterlimit="10" points="15,5 22,12 15,19 "></polyline>
            </svg>
          </div>
          <p class="text-gray-600">
              <ul class="list-disc">
            <li>Go Live with your system</li>
            <li>Accept your first online order</li>
            <li>Create your first POS bill</li>
            <li>Send your first Purchase Order</li>
          </ul>
          </p>
        </div>

      </div>
    </div>


  </section>


<div class="bg-[#f7fdf3] ">
  <section  id="e-Commerce_Website">
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8 ">
    <!-- <div class="text-center w-full text-[#347571] ">
     
        <h2 class="text-4xl font-bold t sm:text-5xl">
          e-Commerce Website

        </h2>

        <p class="mt-8 text-center text-gray-500">
          आपका अपना Online Store भारतरथ के Best-in-Class E-Commerce Platform पर
        </p>
     


    </div> -->
  <Title :des="'आपका अपना Online Store भारतरथ के Best-in-Class E-Commerce Platform पर'" :title="'e-Commerce Website'"/>
    <div class="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <div  class="flex   justify-between  !h-24 mt-5">
          <img src="../assets/ecommerce/website.png" alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">Responsive Web Design</div>
             <div>
            Mobile, tablets या laptops, आपका Online Store दिखे और चले Best-in-Class
            </div>
           </div>
       </div >


         <div  class="flex   justify-between  !h-24 mt-5">
          <img src="../assets/ecommerce/seo.png" alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">Built-in Search Marketing</div>
             <div>
          Google search में आपकी Website की रैंकिंग बढ़ाइए
            </div>
           </div>
       </div >
    
          <div  class="flex   justify-between  !h-24 mt-5">
          <img src="../assets/ecommerce/products.png" alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">Easy Product Management</div>
             <div>
          आपके products को customize, organize और update करे, अपने business के लिए
            </div>
           </div>
       </div >
  
      <div  class="flex   justify-between  !h-24 mt-5">
          <img src="../assets/ecommerce/analysis.png" alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">Data and Analysis</div>
             <div>
           आपके customer और sales data के analysis के साथ आपके बिज़नेस की सेल्स कीजिये दोगुनी
            </div>
           </div>
       </div >
  
          <div  class="flex   justify-between  !h-24 mt-5">
          <img  src="../assets/ecommerce/cart.png"  alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">Best-in-Class Shopping Cart</div>
             <div>
            Secure, user friendly और सबसे आधुनिक features युक्त - online payments, COD और promotions &
          offers
            </div>
           </div>
       </div >
  
        <div  class="flex   justify-between  !h-24 mt-5">
          <img  src="../assets/ecommerce/service.png"  alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">Exceptional Customer Support</div>
             <div>
           आपकी digital journey हम है आपके साथ हर कदम पर - Onboarding से Live से Support तक
            </div>
           </div>
       </div >

    </div>
  </div>
</section>

<section class=" bg-[#f7fdf3] " id="Inventory_Management">
  <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
 <Title :des="'Complete Inventory Management जो आपको दे time saving, cost saving और efficiency'" :title="' Inventory Management'"/>
    <!-- <div class="text-center w-full text-[#347571] ">
     
        <h2 class="text-4xl font-bold t sm:text-5xl">
             Inventory Management

        </h2>

        <p class="mt-8 text-center text-gray-500">
          Complete Inventory Management जो आपको दे time saving, cost saving और efficiency
        </p>
     


    </div> -->
    <div class="mt-8 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">

        <div  class="flex   justify-between  !h-24 mt-5">
          <img  src="../assets/inventory/stock.png"  alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">Accurate Stock Tracking</div>
             <div>
          
          आपकी stock information आपके साथ 24x7 - अब फिर कभी out-of-stock नहीं होगे
            </div>
           </div>
       </div >
  

      
        <div  class="flex   justify-between  !h-24 mt-5">
          <img  src="../assets/inventory/po.png"  alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">On-demand Purchase</div>
             <div>
          
         आपकी shop, website, whatsapp और warehouse - सबकी inventory एक साथ manage करे
            </div>
           </div>
       </div >
    
             <div  class="flex   justify-between  !h-24 mt-5">
          <img  src="../assets/inventory/inventory.png"  alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">Centralized Inventory</div>
             <div>
          
         आपकी shop, website, whatsapp और warehouse - सबकी inventory एक साथ manage करे
            </div>
           </div>
       </div >
     
              <div  class="flex   justify-between  !h-24 mt-5">
          <img src="../assets/inventory/admin.png"   alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">User Friendly Administration</div>
             <div>
          
           बिना किसी technical experience के अपनी digital shop मैनेज करे
            </div>
           </div>
       </div >
 
           <div  class="flex   justify-between  !h-24 mt-5">
          <img  src="../assets/inventory/barcode.png" alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-4">
            <div class="text-xl font-bold">Barcode Labels & Scanning</div>
             <div>
          
         आपके products की easy tracking कीजिये और order processing करे चुटकियो में
            </div>
           </div>
       </div >
    

             <div  class="flex   justify-between  !h-24 mt-5">
          <img src="../assets/inventory/storage.png"  alt="" class="!object-contain !w-1/6 " />
      
          
          <div class=" flex flex-col  w-full ml-2">
            <div class="text-xl font-bold">Cloud Based Secure Storage</div>
             <div>
          
         भारतरथ के secure cloud platform पर निश्चिंत होकर अपना stock data manage करे - कभी भी कही
          भी
            </div>
           </div>
       </div >
  
    </div>
  </div>
</section>

</div>



  <!-- <section class="billing mt-4 mb-20">
    <div class="font-devanagari text-[#347571]  font-bold text-4xl m-5 text-center">
      Inventory Management
    </div>
    <div class="font-devanagari text-[#347571]  m-5 text-center">
      Complete Inventory Management जो आपको दे time saving, cost saving और efficiency
    </div>
    <div class="flex flex-col items-center">
      <div class="bg-[#f7fdf3] flex flex-col items-center w-full">
        <img src="../assets/inventory/stock.png" alt="" class="!object-contain !w-1/6
        " />
        <div class="text-xl font-bold">Accurate Stock Tracking</div>
        <div class="text-center p-5">
          आपकी stock information आपके साथ 24x7 - अब फिर कभी out-of-stock नहीं होगे
        </div>
      </div>
      <div class="flex flex-col items-center w-full">
        <img src="../assets/inventory/po.png" alt="" class="!object-contain !w-1/6
        " />
        <div class="text-xl font-bold">On-demand Purchase</div>
        <div class="text-center p-5">Automatic purchase orders - stock ख़तम होने से पहले</div>
      </div>
      <div class="bg-[#f7fdf3] flex flex-col items-center w-full">
        <img src="../assets/inventory/inventory.png" alt="" class="!object-contain !w-1/6
        " />
        <div class="text-xl font-bold">Centralized Inventory</div>
        <div class="text-center p-5">
          आपकी shop, website, whatsapp और warehouse - सबकी inventory एक साथ manage करे
        </div>
      </div>
      <div class="flex flex-col items-center w-full">
        <img src="../assets/inventory/admin.png" alt="" class="!object-contain !w-1/6
        " />
        <div class="text-xl font-bold">User Friendly Administration</div>
        <div class="text-center p-5">
          बिना किसी technical experience के अपनी digital shop मैनेज करे
        </div>
      </div>
      <div class="bg-[#f7fdf3] flex flex-col items-center w-full">
        <img src="../assets/inventory/barcode.png" alt="" class="!object-contain !w-1/6
        " />
        <div class="text-xl font-bold">Barcode Labels & Scanning</div>
        <div class="text-center p-5">
          आपके products की easy tracking कीजिये और order processing करे चुटकियो में
        </div>
      </div>
      <div class="flex flex-col items-center w-full">
        <img src="../assets/inventory/storage.png" alt="" class="!object-contain !w-1/6
        " />
        <div class="text-xl font-bold">Cloud Based Secure Storage</div>
        <div class="text-center p-5">
          भारतरथ के secure cloud platform पर निश्चिंत होकर अपना stock data manage करे - कभी भी कही
          भी
        </div>
      </div>
    </div>
    <Testimonials />
    <ContactUs />
    <Footer />
  </section> -->
   <Testimonials />
    <ContactUs />
    <Footer />
</template>

<script setup >
import Testimonials from './components/Testimonials.vue'
import Footer from './components/Footer.vue'
import ContactUs from './components/ContactUs.vue'
import Navbar from './components/Navbar.vue'
import Title from './components/Title.vue'
import Hero from './components/Hero.vue'
window.addEventListener('load', () => {
  const images = document.querySelectorAll('.scroll-container img')
  let minHeight = Infinity

  // Find the smallest image height
  images.forEach((img) => {
    if (img.height < minHeight) {
      minHeight = img.height
    }
  })

  // Set all images to the same height
  images.forEach((img) => {
    img.style.height = `${minHeight}px`
  })
})
</script>

<style>
.slider {
  height: 100px;
  position: relative;
  width: 100%;

  display: grid;
  place-items: center;
  overflow: hidden;
}
.slider::before,
.slider::after {
  position: absolute;
  background-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  content: '';
  height: 100%;
  width: 25%;
  z-index: 2;
  pointer-events: none;
}
.slider::before {
  left: 0;
  top: 0;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

/*  IMPORTANT CODE BELOW */

.slide-track {
  width: calc(150px * 20);
  display: flex;
  animation: scroll 20s linear infinite;
  justify-content: space-between;
}

.slide-track2 {
  width: calc(150px * 15);
  display: flex;
  animation: scroll2 15s linear infinite;
  justify-content: space-between;
}

.slide {
  width: 150px;
  height: 60px;

  display: grid;
  place-items: center;
  transition: 0.5s;
  cursor: pointer;
}
.slide:hover {
  transform: scale(0.8);
}

@keyframes scroll {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(calc(-150px * 10));
  }
}

@keyframes scroll2 {
  0% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(calc(-150px * 5));
  }
}

@media screen and (max-width: 768px) {
  .slide-track {
    width: calc(80px * 20);
  }

  .slide-track2 {
    width: calc(80px * 15);
  }

  .slide {
    width: 80px;
  }

  @keyframes scroll {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-80px * 10));
    }
  }

  @keyframes scroll2 {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(calc(-80px * 5));
    }
  }
}
</style>
