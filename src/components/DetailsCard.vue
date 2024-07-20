<script setup>
import { useRoute } from "vue-router";
import { useLoanList } from "../utils/stores/loanList";
import { computed } from "vue";

import moment from "moment";

const route = useRoute();
const store = useLoanList();

const id = computed(() => route.params.id);

const dataLoanDetail = computed(() => {
  return store.getDataLoan.find((loan) => loan.id === id.value);
});

const formatDate = (value) => {
  if (value) {
    return moment(String(value)).format("DD/MM/YYYY");
  }
};
</script>

<template>
  <div class="flex flex-wrap justify-center gap-4 py-20">
    <div class="card card-side bg-base-100 shadow-xl w-full mx-4">
      <div class="card-body">
        <h1 class="card-title text-2xl font-JakartaSans">{{ dataLoanDetail?.purpose }}</h1>
        <div class="text-lg text-gray-700 font-JakartaSans">
          <p>Name: {{ dataLoanDetail?.borrower.name }}</p>
          <p>Email: {{ dataLoanDetail?.borrower.email }}</p>
          <p>Credit Score: {{ dataLoanDetail?.borrower.creditScore }}</p>
          <p>Collateral: {{ dataLoanDetail?.collateral.type }}</p>
          <p>Value: {{ dataLoanDetail?.collateral.value }}</p>
          <p>
            Document:
            <a
              v-if="dataLoanDetail?.documents?.[0]?.url"
              :href="dataLoanDetail.documents[0].url"
              target="_blank"
              class="text-blue-600 underline"
            >
              {{ dataLoanDetail.documents[0].type }}
            </a>
          </p>
          <p>Amount: {{ dataLoanDetail?.amount }}</p>
          <p>Interest Rate: {{ dataLoanDetail?.interestRate }}</p>
          <p>Risk Rating: {{ dataLoanDetail?.riskRating }}</p>
          <p>Term: {{ dataLoanDetail?.term }} /month</p>
          <div>
            <h3 class="font-bold mt-4">Repayment Schedule</h3>
            <ul>
              <li v-for="(installment, index) in dataLoanDetail?.repaymentSchedule?.installments" :key="index">
                <p>Due Date: {{ formatDate(installment.dueDate) }}</p>
                <p>Amount Due: {{ installment.amountDue }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
