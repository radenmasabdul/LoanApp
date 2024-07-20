import { defineStore } from "pinia";
import Api from "../index";

export const useLoanList = defineStore('loanList', {
    state: () => ({
        dataLoanList: [],
        isLoading: false,
    }),
    getters: {
        getDataLoan(state) {
            return state.dataLoanList
        },
    },
    actions: {
        async getLoanList() {
            try {
                if (this.isLoading || this.dataLoanList.length > 0) return; //untuk menghindari permintaan api secara berulang

                this.isLoading = true;

                const res = await Api.get('/loans.json');

                // console.log('hasil res:', res.data)
                this.dataLoanList = res.data;
            } catch (error) {
                console.error(error)
            } finally {
                this.isLoading = false;
            }
        }
    },
})