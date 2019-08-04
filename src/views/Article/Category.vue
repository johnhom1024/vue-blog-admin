<template lang="pug">
    v-card
        v-card-title.headline 类别列表
            v-spacer
            add-cate-dialog(@update:category_list="getCategoryList")
        v-data-table(
            :items="category_list"
            :headers="headers"
            :disable-initial-sorr="true"
        )
            template(v-slot:item.action="{ item }")
                v-icon(small class="mr-2" @click="editItem(item)") edit
                v-icon(small @click="deleteItem(item)") delete
</template>

<script>
import addCateDialog from './components/addCateDialog.vue';
export default {
    components: {
        addCateDialog
    },
    data() {
        return {
            category_list: [],
            headers: [
                {
                    text: '类名',
                    align: 'left',
                    sortable: false,
                    value: 'cate_name'
                },
                {
                    text: "操作",
                    value: "action",
                    sortable: false
                }
            ]

        }
    },
    mounted() {
        this.getCategoryList();
    },  
    methods: {
        getCategoryList() {
            this.$store.commit("openLoading");
            this.$api.category.getCategoryList().then( res => {
                this.category_list = res.result;
                this.$store.commit("closeLoading");
            })
        },
        deleteItem(item) {
            this.$store.commit('openConfirm', {
                title: "删除类别",
                text: "是否确认删除该类别",
                func: this.deleteCategory,
                params: item._id
            })
        },
        deleteCategory(id) {
            this.$api.category.deleteCategory(id).then( res => {
                this.$store.commit('openSnackbar', {
                    color: "success",
                    text: res.msg,
                })

                this.getCategoryList();
            })
        }
    }
}
</script>
