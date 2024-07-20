<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useLoanList } from "../utils/stores/loanList";

const store = useLoanList();
const searchKeyword = ref(store.getSearchData);

const handleKeyPress = (event) => {
  if (event.key === "Enter") {
    store.setSearchKeyword(searchKeyword.value);
  }
};

const clearSearch = () => {
  searchKeyword.value = "";
  store.setSearchKeyword("");
};
</script>

<template>
  <div class="navbar bg-blue-600">
    <div class="flex-1">
      <RouterLink to="/">
        <h1 class="text-2xl text-white cursor-pointer font-JakartaSans">Loan App</h1>
      </RouterLink>
    </div>
    <div class="flex-none gap-2">
      <div class="form-control">
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search"
          class="input input-bordered w-24 md:w-auto"
          v-model="searchKeyword"
          @keypress="handleKeyPress"
          @click="clearSearch"
        />
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
