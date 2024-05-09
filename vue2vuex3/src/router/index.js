import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/pages/HomePage.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        { path: '/', name: 'home', component: HomePage },
        {
            path: '/blog',
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
            path: '/project',
            name: 'project',
            component: () => import('../pages/ProjectPage.vue'),
        },
        {
            path: '/project-one/:id?',
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
