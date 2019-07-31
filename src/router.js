import Vue from "vue";
import Router from "vue-router";

const Index = () => import("@/pages/Index.vue");
const Login = () => import("@/pages/Login.vue");
const ArticleList = () => import('@/views/Article/ArticleList.vue');
const Category = () => import('@/views/Article/Category.vue');
const Dashboard = () => import('@/views/Dashboard/Dashboard.vue');

Vue.use(Router);

export default new Router({
    mode: "history",
    // base: process.env.BASE_URL,
    base: '/admin/',
    routes: [
        {
            path: "/",
            component: Index,
            children: [
                {
                    path: '',
                    redirect: '/article_list'
                },
                {
                    path: 'article_list',
                    component: ArticleList
                },
                {
                    path: 'category_list',
                    component: Category
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
