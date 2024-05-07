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
        getActiveTag: (state) => state.tags.find((el) => el.isActive === true),

        categories: (state) => state.categories,
        getActiveCategory: (state) =>
            state.categories.find((el) => el.isActive === true),

        posts: (state) => state.posts,
        getLimitPosts: (state) => (limit) => {
            return state.posts.slice(0, limit);
        },
        getPostsByTag: (state) => (tagName) => {
            if (tagName) {
                return state.posts.filter((el) => tagName === el.tag);
            } else {
                return state.posts;
            }
        },
        getLastPost: (state) => {
            return state.posts.at(-1);
        },

        projects: (state) => state.projects,
        getLimitProjects: (state) => (limit) => {
            return state.projects.slice(0, limit);
        },
        getProjectsByCategory: (state) => (catName) => {
            if (catName) {
                return state.projects.filter((el) => catName === el.category);
            } else {
                return state.projects;
            }
        },
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
                });
        },
        fetchProjects({ commit }) {
            fetch('https://apigb.elenivan.ru/getphpservice.php?fname=projects')
                .then((res) => res.json())
                .then((json) => {
                    commit('SET_PROJECTS', json);
                });
        },
    },
});
