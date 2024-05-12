// import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

// Vue.use(Router);

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: HomePage },
        {
            path: '/blog/:page?',
            name: 'blog',
            component: () => import('../pages/BlogPage.vue'),
        },
        {
            path: '/blog-post/:id?',
            name: 'blog-post',
            component: () => import('../pages/BlogDetailsPage.vue'),
            props: true,
        },
        {
            path: '/project/:page?',
            name: 'project',
            component: () => import('../pages/ProjectPage.vue'),
        },
        {
            path: '/project-one/:id',
            name: 'project-one',
            component: () => import('../pages/ProjectDetailsPage.vue'),
            props: true,
        },
        {
            path: '/404',
            name: '404',
            component: () => import('../pages/Page404.vue'),
        },
        {
            path: '*',
            redirect: '404',
        },
    ],
});
export default router;
