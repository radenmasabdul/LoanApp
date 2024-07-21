<script setup>
import { useLoanList } from "../utils/stores/loanList";
import { computed, ref } from "vue";

const store = useLoanList();
const dataLoanList = computed(() => store.filteredDataLoan);

const selectedPurpose = ref("");
const selectedType = ref("");
const selectedRating = ref("");

const uniquePurposes = computed(() => {
  const purposes = dataLoanList.value.map((loan) => loan.purpose);
  const uniquePurposeSet = new Set(purposes);
  return [...uniquePurposeSet];
});

const uniqueTypes = computed(() => {
  const types = dataLoanList.value.map((loan) => loan.collateral.type);
  const uniqueTypeSet = new Set(types);
  return [...uniqueTypeSet];
});

const uniqueRatings = computed(() => {
  const ratings = dataLoanList.value.map((loan) => loan.riskRating); // Mengambil semua nilai riskRating dari dataLoanList
  const uniqueRatingsSet = new Set(ratings); // Membuat Set dari ratings untuk mendapatkan nilai unik
  return [...uniqueRatingsSet]; // Mengubah Set menjadi array dan mengembalikannya
});

const filterData = () => {
  store.filterData({
    purpose: selectedPurpose.value,
    type: selectedType.value,
    rating: selectedRating.value,
  });
};

const resetFilters = () => {
  selectedPurpose.value = "";
  selectedType.value = "";
  selectedRating.value = "";
  store.filterData({});
};
</script>

<template>
  <main>
    <div class="flex flex-wrap justify-center gap-4 py-2">
      <label class="form-control w-full max-w-xs" for="select-purpose">
        <div class="label">
          <span class="label-text">Purpose</span>
        </div>
        <select class="select select-info" name="select-purpose" id="select-purpose" v-model="selectedPurpose">
          <option disabled selected>Pick one</option>
          <option v-for="purpose in uniquePurposes" :key="purpose">{{ purpose }}</option>
        </select>
      </label>

      <label class="form-control w-full max-w-xs" for="select-type">
        <div class="label">
          <span class="label-text">Type</span>
        </div>
        <select class="select select-info" name="select-type" id="select-type" v-model="selectedType">
          <option disabled selected>Pick one</option>
          <option v-for="types in uniqueTypes" :key="types">{{ types }}</option>
        </select>
      </label>

      <label class="form-control w-full max-w-xs" for="select-rating">
        <div class="label">
          <span class="label-text">Risk Rating</span>
        </div>
        <select class="select select-info" name="select-rating" id="select-rating" v-model="selectedRating">
          <option disabled selected>Pick one</option>
          <option v-for="rating in uniqueRatings" :key="rating">{{ rating }}</option>
        </select>
      </label>

      <div class="py-9 flex justify-between gap-4">
        <button class="btn btn-primary text-white" @click="filterData">Filter</button>
        <button class="btn btn-error text-white" @click="resetFilters">Reset</button>
      </div>
    </div>
  </main>
</template>

<style scoped></style>
