<template>
    <section class="blog-top">
        <div class="wrapper">
            <div class="blog-top__inner">
                <div class="blog-top__box">
                    <h1 class="blog-top__title header2">Our Project</h1>
                    <nav class="breadcrumbs large-paragraph">
                        <ul class="breadcrumbs__list">
                            <li class="breadcrumbs__item">
                                <a href="#">Home</a>
                            </li>
                            <li class="breadcrumbs__item">
                                <a href="#">Project</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'BlogTop',
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_blog-top.scss';
</style>
