<template>
    <div>
        <BigTop />
        <AchievementComp />
        <HomeArticleList :articles="articles" />
    </div>
</template>

<script>
import BigTop from '@/components/home/BigTop.vue';
import AchievementComp from '@/components/home/AchievementComp.vue';
import HomeArticleList from '@/components/home/HomeArticleList.vue';

export default {
    name: 'HomePage',
    components: {
        BigTop,
        AchievementComp,
        HomeArticleList,
    },
    props: {
        articles: {
            type: Array,
            default: () => {
                return [];
            },
        },
    },
};
</script>
