<template>
    <section class="blog-top">
        <div class="wrapper">
            <div class="blog-top__inner">
                <div class="blog-top__box">
                    <h1 class="header2 blog-top__title">Our Project</h1>
                    <nav class="breadcrumbs large-paragraph">
                        <ul class="breadcrumbs__list">
                            <li class="breadcrumbs__item">
                                <router-link to="/">Home</router-link>
                            </li>
                            <li class="breadcrumbs__item">Project</li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'ProjectTop',
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_blog-top.scss';
</style>
