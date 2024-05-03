<template>
    <footer class="footer">
        <div class="wrapper">
            <div class="footer__inner">
                <div class="footer__item">
                    <a href="./index.html" class="logo">
                        <LogoComp />
                    </a>
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
                            <a href="#">Home</a>
                        </li>
                        <li class="large-paragraph">
                            <a href="#">Project</a>
                        </li>
                        <li class="large-paragraph">
                            <a href="#">Blog</a>
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
<style lang="scss" scoped>
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
.footer {
    padding-top: 96px;
    padding-bottom: 134px;

    &__inner {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: auto;
        column-gap: 27px;

        @media (max-width: 600px) {
            grid-template-columns: 1fr;
            row-gap: 27px;
            padding-left: 30px;
            padding-right: 30px;
        }
    }

    &__item {
        @media (max-width: 600px) {
            text-align: center;
        }
    }

    &__text {
        margin-top: 18px;
        white-space: pre-line;
    }

    &__title {
        text-align: center;
    }

    &__social {
        margin-top: 31px;
        display: flex;
        align-items: center;
        gap: 50px;

        @media (max-width: 600px) {
            justify-content: center;
        }

        &_item {
            width: 20px;
            height: 20px;

            & > a {
                display: block;
                width: 20px;
                height: 20px;
            }
        }
    }

    &__pages {
        text-align: center;

        & > li {
            margin-top: 36px;
        }
    }

    &__contact {
        margin-top: 34px;
        white-space: pre-line;
        text-align: right;

        @media (max-width: 600px) {
            text-align: center;
        }
    }
}
</style>
