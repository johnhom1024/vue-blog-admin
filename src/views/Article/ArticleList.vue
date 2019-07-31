<template lang="pug">
    v-card
        v-card-title.headline 文章列表
            v-spacer
            v-dialog(v-model="articleDialog.show" presistent max-width="500px")
                template(v-slot:activator="{ on }")
                    v-btn(color="primary" v-on="on") 文章录入
                v-card
                    v-card-title.headline 文章信息录入
                    v-card-text
                        p hello
        v-data-table(
            :items="article_list"
            :headers="headers"
            :disable-initial-sort="true"
        )
            template(v-slot:items="props")
                td {{ props.item.title }}
                td {{ props.item.uploadTime }}
                td {{ props.item.category.cate_name }}
                td(layout justify-center)
                    v-icon(small).mr-2.pointer edit
                    v-icon(small @click="deleteArticle(props.item._id)").mr-2.pointer delete


</template>


<script>
export default {
    data() {
        return {
            articleDialog: {
                show: false
            },
            article_list: [],
            headers: [
                {
                    text: "文章标题",
                    align: "left",
                    sortable: false,
                    value: "title"
                },
                {
                    text: "上传时间",
                    align: "left",
                    sortable: false,
                    value: "uploadTime"
                },
                {
                    text: "分类",
                    align: "left",
                    sortable: false,
                    value: "category"
                },
                {
                    text: "操作",
                    align: "left",
                    sortable: false,
                    value: "_id"
                }
            ]
        };
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        getArticleList() {
            this.$api.article.getArticleList().then(res => {
                this.article_list = res;
            });
        },
        deleteArticle(id) {
            let isSure = confirm("你确定要删除该文章吗？");
            if (!isSure) {
                return;
            }

            this.$api.article.deleteArticle(id).then(res => {
                this.getArticleList();
                this.$store.commit('openSnackbar', {
                    color: 'success',
                    text: '文章删除成功'
                })
            });
        }
    }
};
</script>
