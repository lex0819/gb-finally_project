import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tags: [],
        categories: [],
        posts: [],
        projects: [],
    },
    mutations: {
        SET_TAGS(state, payload) {
            state.tags = payload;
        },
        SET_CATEGORIES(state, payload) {
            state.categories = payload;
        },
        SET_POSTS(state, payload) {
            state.posts = payload;
        },
        SET_PROJECTS(state, payload) {
            state.projects = payload;
        },
    },
    getters: {
        tags: (state) => state.tags,
        categories: (state) => state.categories,

        posts: (state) => state.posts,
        getLimitPosts: (state) => (limit) => {
            if (limit) {
                return state.posts.slice(0, limit);
            } else {
                return state.posts;
            }
        },
        getPostsByTag: (state) => (tagName) => {
            if (tagName) {
                return state.posts.filter((el) => tagName === el.tag);
            } else {
                return state.posts;
            }
        },
        getLastPost: (state) => {
            return state.posts.slice(-1)[0];
        },
        getPostById: (state) => (id) => {
            if (id) {
                return state.posts.find((elem) => +id === elem.id);
            } else {
                return null;
            }
        },

        projects: (state) => state.projects,
        getLimitProjects: (state) => (limit) => {
            if (limit) {
                return state.projects.slice(0, limit);
            } else {
                return state.projects;
            }
        },
        getProjectsByCategory: (state) => (catName) => {
            if (catName) {
                return state.projects.filter((el) => catName === el.category);
            } else {
                return state.projects;
            }
        },
        // getLastProject: (state) => {
        //     return state.projects.slice(-1)[0];
        // },
        getProjectById: (state) => (id) => {
            if (id) {
                return state.projects.find((elem) => +id === elem.id);
            } else {
                return null;
            }
        },
    },
    actions: {
        fetchTags({ commit }) {
            fetch('https://apigb.elenivan.ru/getphpservice.php?fname=tags')
                .then((res) => res.json())
                .then((json) => commit('SET_TAGS', json))
                .catch((er) => console.log(er.message));
        },
        fetchCategories({ commit }) {
            fetch(
                'https://apigb.elenivan.ru/getphpservice.php?fname=categories'
            )
                .then((res) => res.json())
                .then((json) => commit('SET_CATEGORIES', json))
                .catch((er) => console.log(er.message));
        },
        fetchPosts({ commit }) {
            fetch('https://apigb.elenivan.ru/getphpservice.php?fname=posts')
                .then((res) => res.json())
                .then((json) => commit('SET_POSTS', json))
                .catch((er) => console.log(er.message));
        },
        fetchProjects({ commit }) {
            fetch('https://apigb.elenivan.ru/getphpservice.php?fname=projects')
                .then((res) => res.json())
                .then((json) => commit('SET_PROJECTS', json))
                .catch((er) => console.log(er.message));
        },
    },
});
