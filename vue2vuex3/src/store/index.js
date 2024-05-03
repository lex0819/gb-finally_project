import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tags: [],
        categories: [],
        posts: [],
        projects: [],
        limitProjects: [],
        limitPosts: [],
        lastPost: {},
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
        SET_LIMIT_POSTS(state, payload) {
            state.limitPosts = payload;
        },
        SET_PROJECTS(state, payload) {
            state.projects = payload;
        },
        SET_LIMIT_PROJECTS(state, payload) {
            state.limitProjects = payload;
        },
        SET_LAST_POST(state, payload) {
            state.lastPost = payload;
        },
    },
    getters: {
        tags: (state) => state.tags,
        categories: (state) => state.categories,
        posts: (state) => state.posts,
        getLimitPosts: (state) => state.limitPosts,
        projects: (state) => state.projects,
        getLimitProjects: (state) => state.limitProjects,
    },
    actions: {
        fetchTags({ commit }) {
            fetch('https://apigb.elenivan.ru/getphpservice.php?fname=tags')
                .then((res) => res.json())
                .then((json) => commit('SET_TAGS', json));
        },
        fetchCategories({ commit }) {
            fetch(
                'https://apigb.elenivan.ru/getphpservice.php?fname=categories'
            )
                .then((res) => res.json())
                .then((json) => commit('SET_CATEGORIES', json));
        },
        fetchPosts({ commit }) {
            fetch('https://apigb.elenivan.ru/getphpservice.php?fname=posts')
                .then((res) => res.json())
                .then((json) => {
                    commit('SET_POSTS', json);
                    commit('SET_LIMIT_POSTS', json.slice(0, 3));
                });
        },
        fetchProjects({ commit }) {
            fetch('https://apigb.elenivan.ru/getphpservice.php?fname=projects')
                .then((res) => res.json())
                .then((json) => {
                    commit('SET_PROJECTS', json);
                    commit('SET_LIMIT_PROJECTS', json.slice(0, 4));
                });
        },
        fetchLastPost({ commit }) {
            fetch('https://apigb.elenivan.ru/getphpservice.php?fname=lastpost')
                .then((res) => res.json())
                .then((json) => commit('SET_LAST_POST', json));
        },
    },
});
