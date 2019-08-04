<!--
 * @description: 录入文章的弹窗组件
 * @since: 2019-08-01 17:17:29
 * @Author: jawnwa22
 * @LastEditors: jawnwa22
 * @LastEditTime: 2019-08-04 15:19:51
 -->

<template lang="pug">
    v-dialog(v-model="dialog" presistent max-width="500px")
        template(v-slot:activator="{ on }")
            v-btn(color="primary" v-on="on") 文章录入
        v-card
            v-card-title.headline 文章信息录入
            v-card-text
                v-layout(align-center justify-space-between)
                    v-file-input(:label="file" v-model="file")
                    //- div.select
                    //-     input#select-file.d-none(type="file" @change="showFileName")
                    //-     //- label(for="select-file").v-btn 选择文件
                    //-     v-btn(for="select-file" label) 选择文件
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
            category_list: []
        }
    },
    mounted() {
        this.getCategoryList();
    },
    methods: {
        close() {
            this.dialog = false;
        },
        showFileName(e) {
            this.file = e.target.files[0];
            this.file_name = this.file.name;
        },
        uploadFile() {
            
        },
        getCategoryList() {
            this.$api.article.getCategoryList().then( res => {
                this.category_list = res.result;
            })
        }
    }
}
</script>
