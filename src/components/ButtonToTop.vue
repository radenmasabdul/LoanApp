<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
</script>

<template>
  <button class="to-top-button" @click="scrollToTop">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="3"
      stroke="currentColor"
      width="16"
      height="16"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
    </svg>
  </button>
</template>

<style scoped>
.to-top-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #2563eb;
  color: #fff;
  border: none;
  cursor: pointer;
  z-index: 9999;
  display: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 0.3s;
}

.show-to-top {
  display: block;
}
</style>
