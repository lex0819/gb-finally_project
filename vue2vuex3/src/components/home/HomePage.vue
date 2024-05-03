<template>
    <div>
        <BigTop />
        <HomeProjectList />
        <AchievementComp />
        <HomeArticleList />
    </div>
</template>

<script>
import BigTop from '@/components/home/BigTop.vue';
import AchievementComp from '@/components/home/AchievementComp.vue';
import HomeArticleList from '@/components/home/HomeArticleList.vue';
import HomeProjectList from '@/components/home/HomeProjectList.vue';

export default {
    name: 'HomePage',
    components: {
        BigTop,
        AchievementComp,
        HomeArticleList,
        HomeProjectList,
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
</style>
