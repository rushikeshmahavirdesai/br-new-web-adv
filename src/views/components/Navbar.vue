<template>
  <div class="navbar  shadow-sm fixed z-10 bg-white">

    <div class="!navbar-start hidden lg:flex ">
      <ul class="menu menu-horizontal px-1 ">
        <li><a href="/" class="!text-brandGreen font-semibold">Home</a></li>
        <li><a href="#features" class="!text-brandGreen font-semibold">Features</a></li>
        <li><a href="#onboarding" class="!text-brandGreen font-semibold">On-Boarding</a></li>
        <li><a href="#contact_us" class="!text-brandGreen font-semibold">Contact Us</a></li>

      </ul>
    </div>
    <div class="navbar-start">
      <div class="dropdown 0">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 bg-white !z-4 p-2 shadow  rounded-box w-52">
          <li><a href="/" class="!text-brandGreen font-semibold">Home</a></li>
          <li><a href="#features" class="!text-brandGreen font-semibold">Features</a></li>

          <li><a href="#onboarding" class="!text-brandGreen font-semibold">On-Boarding</a></li>
          <li><a href="#contact_us" class="!text-brandGreen font-semibold">Contact Uss</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <img src="../../assets/logo.png" class="!object-fill !h-14 " />
    </div>
  </div>
</template>
