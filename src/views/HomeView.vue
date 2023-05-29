<template>
  <Navbar />
  <div class="!h-10"></div>
  <Hero />


  <section class="brands mt-4 mb-20 p-5">

    <Title :title="'भारत के Businesses का एक ही भरोसा'" />
    <div class="slider">
      <div class="slide-track2">
        <div class="slide">
          <img src="../assets/client-logos/agro-naturals.webp" alt="" />
        </div>
        <div class="slide"><img src="../assets/client-logos/anks.webp" alt="" /></div>
        <div class="slide">
          <img src="../assets/client-logos/bandhanfarms.webp" alt="" />
        </div>
        <div class="slide ">
          <img src="../assets/client-logos/bnjstore.webp" alt="" />
        </div>
        <div class="slide ">
          <img src="../assets/client-logos/completenutrition.webp" alt="" />
        </div>

        <!-- same 5 slides doubled (duplicate)-->
        <div class="slide"><img src="../assets/client-logos/dhule.webp" alt="" /></div>
        <div class="slide">
          <img src="../assets/client-logos/goratna.webp" alt="" />
        </div>
        <div class="slide">
          <img src="../assets/client-logos/gud2eat.webp" alt="" />
        </div>
        <div class="slide ">
          <img src="../assets/client-logos/mishtibox.webp" alt="" />
        </div>
        <div class="slide ">
          <img src="../assets/client-logos/sarovar.webp" alt="" />
        </div>

        <div class="slide"><img src="../assets/client-logos/shreyas.webp" alt="" /></div>
        <div class="slide bg-purple-500">
          <img src="../assets/client-logos/whitefield.webp" alt="" />
        </div>
      </div>
    </div>
  </section>

  <!-- <BoardingSteps /> -->






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
  <Features />
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
import BoardingSteps from './components/BoardingSteps.vue'
import Features from "./components/Features.vue"
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
  background-image: linear-gradient(to right,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%);
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
