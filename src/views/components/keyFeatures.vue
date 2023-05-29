<template>
  <div class="p-5 " id="features">
    <!-- <div class="font-devanagari text-[#347571]  font-bold text-2xl m-5 text-center">
      भारतरथ का World Class Software, भारत के Businesses के लिए
    </div> -->
    <Title :des="'भारत के Businesses के लिए'" :title="'भारतरथ का World Class Software'" />
    <section class="features">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
        <div class="bg-[#f7fdf3] flex flex-col items-center w-full justify-between">
          <img src="../../assets/features/website.png" alt="" class="p-5 !h-48" />
          <div class="text-xl font-bold">e-Commerce Website</div>
          <div class="text-center p-5">
            मिनटों में अपना खुद का e-Commerce business start कीजिये. Digital India के इस दौर में, अब
            आप भी किसी भी बड़ी company को competition दे सकते है.
          </div>
          <a href="#e-Commerce_Website"><img src="../../assets/features/down-button.png" alt="" class="pt-2 pb-5" /></a>
        </div>
        <div class="bg-[#ecf8e5] flex flex-col items-center w-full justify-between">
          <img src="../../assets/features/billing.png" alt="" class="p-5 !h-48" />
          <div class="text-xl font-bold">GST Billing System</div>
          <div class="text-center p-5">
            आपकी Shop हो या Warehouse, Distributorship हो या Production unit, भारतरथ आपके लिए लाये
            है GST billing - Retail POS और B2B Customer bills के लिए.
          </div>
          <a href="#Inventory_Management"><img src="../../assets/features/down-button.png" alt="" class="pt-2 pb-5" /></a>
        </div>
        <div class="bg-[#dcf4ce] flex flex-col items-center w-full justify-between">
          <img src="../../assets/features/inventory.png" alt="" class="p-5 !h-48" />
          <div class="text-xl font-bold">Inventory Management</div>
          <div class="text-center p-5">
            एक ही Integrated Inventory से आपके सभी Sales Channels (e-Commerce, Shop, B2B, Whatsapp)
            को मैनेज कीजिये एक location से .
          </div>
          <a href="#Inventory_Management"><img src="../../assets/features/down-button.png" alt="" class="pt-2 pb-5" /></a>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import Title from "./Title.vue";

</script>
