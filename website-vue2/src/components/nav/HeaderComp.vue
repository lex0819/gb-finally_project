<template>
    <div>
        <header class="header">
            <div class="wrapper">
                <div class="header__inner">
                    <a href="./index.html" class="logo">
                        <LogoComp />
                    </a>
                    <nav class="menu">
                        <ul class="menu__list">
                            <li class="menu__item">
                                <a href="./index.html" target="_blank">Home</a>
                            </li>
                            <li class="menu__item">
                                <a href="#" target="_blank">Project</a>
                            </li>
                            <li class="menu__item">
                                <a href="./blog.html" target="_blank">Blog</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    </div>
</template>

<script>
import LogoComp from '@/components/nav/LogoComp.vue';

export default {
    name: 'HeaderComp',
    components: {
        LogoComp,
    },

    data() {
        return {},
    },

    mounted() {},

    methods: {},
};
</script>
<style lang="scss" scoped>
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
