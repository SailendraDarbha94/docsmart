<template>
    <div class="min-h-screen text-white text-lg bg-slate-700">
        <p>Default layout</p>
        <header>
        <ul>
          <li>
            <NuxtLink to="/">
              Home
            </NuxtLink>
            <NuxtLink to="/events">
              Custom-Layout
            </NuxtLink>
            <NuxtLink to="/test-view">
              Test View
            </NuxtLink>
          </li>
        </ul>
      </header>
        <slot />
    </div>
</template>