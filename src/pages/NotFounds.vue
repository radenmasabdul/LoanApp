<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <section class="bg-white">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="mx-auto max-w-screen-sm text-center">
        <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
          404
        </h1>
        <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
        <p class="mb-4 text-lg font-light text-gray-500">
          Sorry, we can't find that page. You'll find lots to explore on the home page.
        </p>

        <RouterLink to="/">
          <a
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >Back to Homepage</a
          >
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
