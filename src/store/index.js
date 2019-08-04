import Vue from "vue";
import Vuex from "vuex";

const state = {
    isLoading: false,
    snackbar: {
        show: false,
        color: "", // success / error / info / warning
        text: null
    },
    confirmDialog: {
        show: false,
        title: null,
        text: null,
        func: null,
        params: null,
    }
};

const mutations = {
    openSnackbar(state, payload) {
        state.snackbar = {
            show: true,
            color: payload.color,
            text: payload.text
        }
    },
    closeSnackbar(state) {
        state.snackbar.show = false;
    },
    openLoading(state) {
        state.isLoading = true;
    },
    closeLoading(state) {
        setTimeout(() => {
            state.isLoading = false;
        }, 500);
    },
    openConfirm(state, payload) {
        state.confirmDialog = {
            show: true,
            title: payload.title,
            text: payload.text,
            func: payload.func,
            params: payload.params
        }
    },
    closeConfirm(state) {
        state.confirmDialog = {
            show: false,
            title: null,
            text: null,
            func: null,
            params: null
        }
    }
}

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
    state,
    mutations,
    // plugins: [createPersistedState()],
    // modules: {}
});

export default store;
