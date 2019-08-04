<template lang="pug">
    v-app
        router-view
        v-snackbar(v-model="snackbar.show" :top="true" :color="snackbar.color") {{snackbar.text}}
            v-btn(text @click="snackbar.show = false") 关闭
        v-dialog(v-model="isLoading" width="300" persistent)
            v-card(color="primary" dark)
                v-card-text
                    span 请求中...
                    v-progress-linear.mb-0(color="white" indeterminate)
        v-dialog(v-model="confirmDialog.show" width="360")
            v-card
                v-card-title.title {{ confirmDialog.title }}
                v-card-text {{ confirmDialog.text}}
                v-card-actions
                    v-spacer
                    v-btn(color="error" @click="confirmDialog.show = false") 取消
                    v-btn(color="primary" @click="confirm") 确认

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
    methods: {
        confirm() {
            let {func, params} = this.confirmDialog;
            func(params);
            this.$store.commit('closeConfirm');
        }
    },
    computed: {
        ...mapState(["isLoading"]),
        snackbar: {
            get() {
                return this.$store.state.snackbar;
            },
            set(value) {
                this.$store.commit("closeSnackbar");
            }
        },
        confirmDialog: {
            get() {
                return this.$store.state.confirmDialog;
            },
            set() {
                this.$store.commit('closeConfirm');
            }
        }
    }
};
</script>
