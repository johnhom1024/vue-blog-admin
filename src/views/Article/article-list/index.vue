<template lang="pug">
    v-card
        v-card-title.headline 博文列表
            v-spacer
            add-article-dialog
        v-data-table(
            :items="article_list"
            :headers="headers"
            :disable-initial-sorr="true"
        )
            template(v-slot:item.action="{ item }")
                v-icon(small class="mr-2") edit
                v-icon(small) delete

</template>

<script>
import addArticleDialog from "./components/addArticleDialog.vue";
export default {
    components: {
        addArticleDialog
    },
    data() {
        return {
            article_list: [],
            headers: [
                {
                    text: "文章名称",
                    value: "title"
                },
                {
                    text: "创建时间",
                    value: "createdAt"
                },
                // {
                //     text: "标签",
                //     value: "tag"
                // },
                {
                    text: "操作",
                    value: "action"
                }
            ]
        }
    },
    mounted() {
        this.getArticleList();
    },
    methods: {
        getArticleList() {
            this.$api.article.getArticleList().then( res => {
                this.article_list = res.result;
            })
        }
    }
}
</script>