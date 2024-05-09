<template>
    <section class="achievement">
        <div class="wrapper">
            <ul class="achievement__list">
                <li class="achievement__item">
                    <h3 class="achievement__indicator">12</h3>
                    <p class="achievement__desc">Years Of Experiance</p>
                </li>
                <li class="achievement__item">
                    <h3 class="achievement__indicator">85</h3>
                    <p class="achievement__desc">Success Project</p>
                </li>
                <li class="achievement__item">
                    <h3 class="achievement__indicator">15</h3>
                    <p class="achievement__desc">Active Project</p>
                </li>
                <li class="achievement__item">
                    <h3 class="achievement__indicator">95</h3>
                    <p class="achievement__desc">Happy CUstomers</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: 'AchievementComp',
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_achievement.scss';
</style>
