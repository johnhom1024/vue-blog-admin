<template lang="pug">
    v-app
        router-view
        v-snackbar(v-model="snackbar.show" :top="true" :color="snackbar.color") {{snackbar.text}}
            v-btn(flat @click="snackbar.show = false") 关闭
        v-dialog(v-model="isLoading" width="300" persistent)
            v-card(color="primary" dark)
                v-card-text
                    span 请求中...
                    v-progress-linear.mb-0(color="white" indeterminate)
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "App",
    data() {
        return {
            //
        };
    },
    mounted() {
        // this.$store.commit("closeLoading");
    },
    methods: {},
    computed: {
        ...mapState(["isLoading"]),
        snackbar: {
            get() {
                return this.$store.state.snackbar;
            },
            set(value) {
                this.$store.commit("closeSnackbar");
            }
        }
    }
};
</script>
