<script setup>
import { RouterLink } from "vue-router";
import { useLoanList } from "../utils/stores/loanList";
import { computed } from "vue";

const store = useLoanList();
const dataLoanList = computed(() => store.getDataLoan);
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 py-20">
    <div class="card bg-base-100 w-96 shadow-xl cursor-default" v-for="data in dataLoanList" :key="data.id">
      <div class="card-body">
        <h5 class="card-title text-2xl font-bold tracking-tight text-gray-900 font-JakartaSans">{{ data.purpose }}</h5>
        <p class="text-base text-gray-700 font-JakartaSans">Loan Amount: {{ data.amount }}</p>
        <p class="text-base text-gray-700 font-JakartaSans">Interest Rate: {{ data.interestRate }}</p>
        <p class="text-base text-gray-700 font-JakartaSans">Term: {{ data.term }} /month</p>

        <div class="card-actions justify-end">
          <RouterLink :to="`/details/${data.id}`">
            <button
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
