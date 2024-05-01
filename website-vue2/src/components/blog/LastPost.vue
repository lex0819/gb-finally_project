<template>
    <section class="post">
        <div class="wrapper">
            <h2 class="post__header header2">Latest Post</h2>
            <div class="post__card">
                <img :src="post.img" alt="post01" class="post__img" />
                <div class="post__info">
                    <h3 class="post__title header3">
                        Low Cost Latest Invented Interior Designing Ideas
                    </h3>
                    <div class="post__text large-paragraph">
                        <p>
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu
                            sem vitae turpis dignissim maximus.posuere
                            in.Contrary to popular belief.
                        </p>
                        <p>
                            Lorem Ipsum is not simply random text. It has roots
                            in a piece of classica.
                        </p>
                    </div>
                    <div class="post__footer">
                        <p class="post__date small-text">26 December,2022</p>
                        <a href="#" class="post__btn round__btn">
                            <svg
                                width="71"
                                height="70"
                                viewBox="0 0 71 70"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                    cx="35.1641"
                                    cy="35"
                                    r="35"
                                    fill="#F4F0EC"
                                />
                                <path
                                    d="M32.1641 44L40.1641 35L32.1641 26"
                                    stroke="#292F36"
                                    stroke-width="2"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LastPost',
    props: {
        post: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
};
</script>
<style lang="scss" scoped>
@import '@/assets/scss/_reset.scss';
@import '@/assets/scss/_vars.scss';
@import '@/assets/scss/_main.scss';
@import '@/assets/scss/_post.scss';
</style>
