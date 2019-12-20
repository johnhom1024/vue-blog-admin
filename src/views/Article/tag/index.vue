<template lang="pug">
    v-card
        v-card-title.headline 标签列表
            v-spacer
            add-cate-dialog(@update:category_list="getTagList")
        v-data-table(
            :items="tag_list"
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
            tag_list: [],
            headers: [
                {
                    text: '类名',
                    align: 'left',
                    sortable: false,
                    value: 'name'
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
        this.getTagList();
    },  
    methods: {
        getTagList() {
            this.$api.tag.getList().then( res => {
                this.tag_list = res.result
            })
        },
        deleteItem(item) {
            this.$store.commit('openConfirm', {
                title: "删除标签",
                text: "是否确认删除该标签",
                func: this.deleteCategory,
                params: item._id
            })
        },
        deleteCategory(id) {
            console.log(id);
            
            this.$api.tag.deleteTag(id).then( res => {
                this.$store.commit('openSnackbar', {
                    color: "success",
                    text: res.msg,
                })

                this.getTagList();
            })
        }
    }
}
</script>
