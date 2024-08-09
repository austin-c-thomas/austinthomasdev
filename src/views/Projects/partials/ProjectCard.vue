<template>

    <div class="project-card">

        <AccentText class="project--organization">{{ projectData.organization }}</AccentText>

        <div class="project--title">
            <h3>{{ projectData.title }}</h3>
            <AccentText size="med" color="text-primary">{{ projectData.deployed }}</AccentText>
        </div>    

        <h4 class="project--subtitle">{{ projectData.description }}</h4>

        <div class="project--content" v-html="sanitizedContent"></div>

        <div class="project--specs">

            <div v-if="projectData.technologies" class="project--technologies">
                <AccentText size="small">Technologies</AccentText>
                <div class="project--specs--items">
                    <div class="project--specs--item" v-for="(technology, index) in projectData.technologies" :key="index">
                        {{ technology }}
                    </div>
                </div>
            </div>

            <div v-if="projectData.apis" class="project--apis">
                <AccentText size="small">APIs / Integrations</AccentText>
                <div class="project--specs--items">
                    <div class="project--specs--item" v-for="(api, index) in projectData.apis" :key="index">
                        {{ api }}
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script setup>
import { computed } from 'vue';
import DOMPurify from 'dompurify';

DOMPurify.setConfig({
    ADD_ATTR: ['target']
});

const props = defineProps({
    projectData: {
        type: Object,
        required: true
    }
});

const sanitizedContent = computed(() => {
    if (!props.projectData.content) return "";

    return DOMPurify.sanitize(props.projectData.content);
})
</script>
<style scoped>
.project-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project--title {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: flex-end;
}

.project--title h3 {
    font-size: var(--font-size-h2);
    line-height: var(--line-height-h2);
}

.project--subtitle {
    font-weight: 400;
    font-size: 20px;
}

.project--specs--items {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding: 0.75rem 0;
}

@media screen and (max-width: 768px) {
    .project--title {
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 0.5rem;
    }
}
</style>