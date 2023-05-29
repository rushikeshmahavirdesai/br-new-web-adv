<template>
  <!-- <div class="navbar bg-base-100 fixed bg-white mb-10 !shadow-sm !z-10">
    <div class="navbar-start">
      <div class="dropdown bg-white z-40">
        <label tabindex="0" class="btn btn-ghost btn-circle">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 bg-white">
          <li><a href="/">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#onboarding">On-Boarding</a></li>
        </ul>
      </div>
    </div>

    <div class="navbar-end">
      <img src="https://cdn.bharatrath.com/image/rnp5hmry.png" class="!h-10" />
    </div>
  </div> -->
  <div class="navbar bg-base-100 shadow-sm fixed">

    <div class="!navbar-start hidden lg:flex">
      <ul class="menu menu-horizontal px-1">
        <li><a href="/" class="!text-brandGreen font-semibold">Home</a></li>
        <li><a href="#features" class="!text-brandGreen font-semibold">Features</a></li>
        <li><a href="#contact" class="!text-brandGreen font-semibold">Contact Us</a></li>
        <li><a href="#onboarding" class="!text-brandGreen font-semibold">On-Boarding</a></li>
      </ul>
    </div>
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <li><a href="/" class="!text-brandGreen font-semibold">Home</a></li>
          <li><a href="#features" class="!text-brandGreen font-semibold">Features</a></li>
          <li><a href="#contact" class="!text-brandGreen font-semibold">Contact Us</a></li>
          <li><a href="#onboarding" class="!text-brandGreen font-semibold">On-Boarding</a></li>
        </ul>
      </div>
    </div>
    <div class="navbar-end">
      <img src="https://cdn.bharatrath.com/image/rnp5hmry.png" class="!h-10" />
    </div>
  </div>
  <!-- <div class="navbar bg-base-100">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><a>Item 1</a></li>
        <li tabindex="0">
          <a>
            Parent
            <svg class="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
            </svg>
          </a>
          <ul class="p-2 bg-base-100">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
  </div> -->
</template>
