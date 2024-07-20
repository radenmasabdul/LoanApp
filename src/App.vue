<script setup>
import { useLoanList } from "./utils/stores/loanList";

import { onBeforeMount } from "vue";

const store = useLoanList();

onBeforeMount(() => {
  store.getLoanList();
});
</script>

<template>
  <div>
    <router-view />
  </div>
</template>

<style scoped></style>
