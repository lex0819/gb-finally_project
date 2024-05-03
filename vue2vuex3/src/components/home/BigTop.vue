<template>
    <section class="big-top">
        <div class="wrapper">
            <div class="big-top__inner">
                <h1 class="header1">Let Your Home Be Unique</h1>
                <p class="big-top__text">
                    There are many variations of the passages of lorem Ipsum
                    from available, majority.
                </p>
                <SimpleBtn>Get Started</SimpleBtn>
            </div>
        </div>
    </section>
</template>

<script>
import SimpleBtn from '@/components/nav/SimpleBtn';

export default {
    name: 'BigTop',
    components: {
        SimpleBtn,
    },
};
</script>

<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_big-top.scss';
</style>
