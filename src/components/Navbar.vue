<script setup></script>

<template>
  <div class="navbar bg-blue-600">
    <div class="flex-1">
      <h1 class="text-2xl text-white cursor-pointer font-JakartaSans">Loan App</h1>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input type="search" id="search" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
}
</style>
