import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

const state = {
    isLoading: false,
    snackbar: {
        show: false,
        color: "", // success / error / info / warning
        text: null
    },
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
}

Vue.use(Vuex);

/* eslint-disable no-new */
const store = new Vuex.Store({
    state,
    mutations,
    plugins: [createPersistedState()],
    // modules: {}
});

export default store;
