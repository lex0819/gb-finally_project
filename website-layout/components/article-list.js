Vue.component('article-list', {
    props: ['articles', 'tags'],
    data() {
        return {
            tag: '',
        };
    },
    methods: {
        setTag(tag) {
            this.tag = tag;
        },
    },
    computed: {
        filterArticlesTag() {
            if (!this.tag) {
                return this.articles;
            } else {
                return this.articles.filter((it) => it.tag === this.tag);
            }
        },
    },
    template: `
    <div class="news">
        <div class="news-list">
            <div v-for="(item, index) in filterArticlesTag"
                :key="index">
                <new :article="item"></new>
            </div>
        </div>
        <div class="news-tags">
            <tags :tags="tags" @chosenTag="setTag"></tags>
        </div>
    </div>
    `,
});
