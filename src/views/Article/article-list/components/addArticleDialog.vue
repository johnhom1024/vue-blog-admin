<!--
 * @description: 录入文章的弹窗组件
 * @since: 2019-08-01 17:17:29
 * @Author: jawnwa22
 * @LastEditors  : jawnwa22
 * @LastEditTime : 2019-12-18 16:03:46
 -->

<template lang="pug">
    v-dialog(v-model="dialog" presistent max-width="500px")
        template(v-slot:activator="{ on }")
            v-btn(color="primary" v-on="on") 文章录入
        v-card
            v-card-title.headline 文章信息录入
            v-card-text
                v-layout(align-center justify-space-between)
                    v-file-input(v-model="article.file")
                v-select(
                    v-model="article.tag" 
                    :items="tag_list" 
                    item-text="name" 
                    item-value="_id" 
                    multiple
                    chips
                    prepend-icon="bookmark"
                )
            v-card-actions
                v-spacer
                v-btn(text color="error" @click="close") 取消
                v-btn(text color="primary" @click="uploadFile") 上传
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            file: null,
            tag_list: [],
            chips: [],
            items: [],
            article: {
                tag: [],
                file: null,
                file_name: ""
            }
        };
    },
    mounted() {
        this.getTagList();
    },
    methods: {
        close() {
            this.dialog = false;
        },
        // showFileName(e) {
        //     this.file = e.target.files[0];
        // },
        // 删除标签
        remove(item) {
            this.chips.splice(this.chips.indexOf(item), 1);
            this.chips = [...this.chips];
        },
        uploadFile() {
            this.$api.article
                .uploadArticle({
                    mdfile: this.article.file,
                    tag: this.article.tag
                })
                .then(res => {});
        },
        getTagList() {
            this.$api.tag.getList().then(res => {
                this.tag_list = res.result;
            });
        }
    }
};
</script>
