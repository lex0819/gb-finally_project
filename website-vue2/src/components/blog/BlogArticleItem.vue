<template>
    <div>
        <img :src="article.img" :alt="article.alt" class="article__img" />
        <div class="article__info">
            <h3 class="article__title header3">
                {{ article.title }}
            </h3>
            <p class="article__category small-text">
                {{ article.category }}
            </p>
        </div>
        <div class="article__footer">
            <p class="article__date small-text">
                {{ article.date }}
            </p>
            <a href="#" class="article__btn round__btn">
                <svg
                    width="71"
                    height="70"
                    viewBox="0 0 71 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx="35.1641" cy="35" r="35" fill="#F4F0EC" />
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
</template>

<script>
export default {
    name: 'BlogArticleItem',
    props: {
        article: {
            type: Object,
            default: () => {
                return {};
            },
        },
    },
};
</script>
