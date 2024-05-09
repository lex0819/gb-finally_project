<template>
    <div id="app">
        <HeaderComp />
        <router-view />
        <FooterComp />
    </div>
</template>

<script>
import HeaderComp from '@/components/nav/HeaderComp.vue';
import FooterComp from '@/components/nav/FooterComp.vue';

export default {
    name: 'App',
    components: {
        HeaderComp,
        FooterComp,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
</style>
