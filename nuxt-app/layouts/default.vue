<template>
  <div class="min-h-screen p-2 text-lg bg-slate-700">
    <div class="hidden md:block">
      <NavbarDesktop />
    </div>
    <div class="block md:hidden">
      <NavbarMobile />
    </div>
    <slot />
  </div>
</template>