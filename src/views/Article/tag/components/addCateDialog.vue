<!--
 * @description: 类别录入弹窗
 * @since: 2019-08-04 10:38:31
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-08-06 18:00:51
 -->

<template lang="pug">
    v-dialog(v-model="dialog" presistent max-width="500px")
        template(v-slot:activator="{on}")
            v-btn(color="primary" v-on="on") 新增类别
        v-card
            v-card-title.headline 新增类别
            v-card-text
                v-combobox(
                    v-model="chips"
                    chips
                    clearable
                    multiple
                )
                    template(v-slot:selection="{ attrs, item, select, selected }")
                        v-chip(
                            v-bind="attrs"
                            :input-value="selected"
                            close
                            @click="select"
                            @click:close="remove(item)"
                        )
                            span {{ item }}
            v-card-actions
                v-spacer
                v-btn(color="error" text @click="dialog = false") 取消
                v-btn(color="primary" @click="addCategory") 添加
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            chips: [],
            items: []
        };
    },
    mounted() {
        // this.getCategoryList();
    },
    methods: {
        // getCategoryList() {
        //     this.$api.category.getCategoryList().then(res => {

        //     });
        // },
        remove(item) {
            this.chips.splice(this.chips.indexOf(item), 1);
            this.chips = [...this.chips];
        },
        addCategory() {
            if (!this.chips.length) {
                this.$store.commit("openSnackbar", {
                    text: "添加的类别不能为空",
                    color: "error"
                })
                return;
            }
            this.$api.tag.addTag(this.chips).then( res => {
                this.$store.commit("openSnackbar", {
                    text: res.msg,
                    color: "success"
                });

                this.dialog = false;
                this.$emit('update:category_list');
            })
        }
    }
};
</script>
