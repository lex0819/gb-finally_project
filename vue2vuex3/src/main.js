import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import App from './App.vue';
import store from './store';
import router from './router';

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.config.productionTip = false;

new Vue({
    store: new Vuex.Store(store),
    router,
    render: (h) => h(App),
}).$mount('#app');
