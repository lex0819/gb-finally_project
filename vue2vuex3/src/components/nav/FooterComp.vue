<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer__inner">
                <div class="footer__item">
                    <router-link to="/">
                        <LogoComp />
                    </router-link>
                    <p class="footer__text large-paragraph">
                        It is a long established fact that a reader will be
                        distracted looking.
                    </p>
                    <ul class="footer__social">
                        <li class="footer__social_item">
                            <a href="#"><TwitterComp /></a>
                        </li>
                        <li class="footer__social_item">
                            <a href="#"><LinkedIn /></a>
                        </li>
                    </ul>
                </div>
                <div class="footer__item">
                    <h3 class="footer__title header3">Pages</h3>
                    <ul class="footer__pages">
                        <li class="large-paragraph">
                            <router-link to="/">Home</router-link>
                        </li>
                        <li class="large-paragraph">
                            <router-link to="/project">Project</router-link>
                        </li>
                        <li class="large-paragraph">
                            <router-link to="/blog">Blog</router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer__item">
                    <ContactComp />
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import LogoComp from '@/components/nav/LogoComp.vue';
import TwitterComp from '@/components/socials/TwitterComp';
import LinkedIn from '@/components/socials/LinkedIn.vue';
import ContactComp from '@/components/nav/ContactComp.vue';

export default {
    name: 'FooterComp',
    components: {
        LogoComp,
        TwitterComp,
        LinkedIn,
        ContactComp,
    },
};
</script>
<style lang="scss">
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_footer.scss';
</style>
