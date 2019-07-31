<template lang="pug">
    v-card
        v-card-title.headline 类别列表
            v-spacer
            v-dialog(v-model="categoryDialog.show" presistent max-width="500px")
                template(v-slot:activator="{ on }")
                    v-btn(color="primary" v-on="on") 文章录入
                v-card
                    v-card-title.headline 文章信息录入
                    v-card-text
                        p hello
        v-data-table(
            :items="category_list"
            :headers="headers"
            :disable-initial-sorr="true"
        )
            template(v-slot:items="props")
                td {{ props.item.cate_name }}
                td(layout justify-center)
                    v-icon(small).mr-2 edit
                    v-icon(small).mr-2 delete
</template>


<script>
export default {
    data() {
        return {
            category_list: [],
            categoryDialog: {
                show: false
            },
            headers: [
                {
                    text: '类名',
                    align: 'left',
                    sortable: false,
                    value: 'cate_name'
                },
                {
                    text: '操作',
                    algn: 'center',
                    sortable: false,
                    value: '_id'
                }
            ]

        }
    },
    mounted() {
        this.getCategoryList();
    },  
    methods: {
        getCategoryList() {
            this.$api.article.getCategoryList().then(res => {
                this.category_list = res;
            })
        }
    }
}
</script>
