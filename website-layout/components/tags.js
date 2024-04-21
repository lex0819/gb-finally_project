Vue.component('tags', {
    props: ['tags'],
    data() {
        return {
            tagsActive: [],
        };
    },
    methods: {
        tagActive(index) {
            let tag = '';
            const chosenTag = this.tagsActive[index];
            if (chosenTag.isActive === true) {
                chosenTag.isActive = false;
                tag = '';
            } else {
                this.tagsActive.forEach((it) => (it.isActive = false));
                chosenTag.isActive = true;
                tag = chosenTag.name;
            }

            this.$emit('chosenTag', tag);
        },
    },
    computed: {
        setTagsActive() {
            return this.tagsActive;
        },
    },
    mounted() {
        this.tagsActive = this.tags.map((element) => {
            return {
                name: element,
                isActive: false,
            };
        });
    },
    template: `
    <div class="tags">
        <h3 class="header3">Tags</h3>
        <div class="tag-list">
            <div 
                class="tag-item"
                v-for="(tag, index) in setTagsActive"
                :key="index"
                @click="tagActive(index)"
                :class="{ 'tag-active': tag.isActive }">
                {{tag.name}}
            </div>
        </div>
    </div>`,
});
