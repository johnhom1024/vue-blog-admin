import Vue from "vue";
import Router from "vue-router";

const Index = () => import("@/pages/Index.vue");
const Login = () => import("@/pages/Login.vue");
const ArticleList = () => import('@/views/Article/article-list');
const Dashboard = () => import('@/views/Dashboard/Dashboard.vue');
const Tag = () => import("@/views/Article/tag");

Vue.use(Router);

export default new Router({
    mode: "history",
    base: '/admin/',
    routes: [
        {
            path: "/",
            component: Index,
            children: [
                {
                    path: '',
                    redirect: '/article'
                },
                {
                    path: 'article',
                    component: ArticleList
                },
                {
                    path: 'tag',
                    component: Tag
                },
                {
                    path: 'dashboard',
                    component: Dashboard

                }
            ]
        },
        {
            path: "/login",
            component: Login
        },
    ]
});
