<template>
    <header class="header">
        <div class="wrapper">
            <div class="header__inner">
                <a href="./index.html" class="logo">
                    <LogoComp />
                </a>
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
import LogoComp from '@/components/nav/LogoComp.vue';

export default {
    name: 'HeaderComp',
    components: {
        LogoComp,
    },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
.header {
    padding-top: 44px;
    padding-bottom: 45px;

    &__inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }
}

.menu {
    &__list {
        display: flex;
        justify-content: end;
        gap: 45px;
        align-items: center;
    }

    &__item {
        font-size: 20px;
        line-height: 1.25;
    }
}
</style>
