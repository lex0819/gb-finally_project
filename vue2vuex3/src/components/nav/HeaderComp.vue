<template>
    <header class="header">
        <div class="wrapper">
            <div class="header__inner">
                <router-link to="/">
                    <LogoComp />
                </router-link>
                <nav class="menu">
                    <ul class="menu__list">
                        <li class="menu__item">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="menu__item">
                            <router-link to="/project">Project</router-link>
                        </li>
                        <li class="menu__item">
                            <router-link to="/blog">Blog</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
// import router from 'vue-router';
import LogoComp from '@/components/nav/LogoComp.vue';

export default {
    name: 'HeaderComp',
    components: {
        LogoComp,
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_header.scss';
</style>
