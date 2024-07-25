<template>
    <SectionWrapper v-if="section" :id="section.id">
        
        <div class="section">

            <SectionHeader>
                <template v-slot:titlePrepend>{{ section.titlePrepend }}</template>
                <template v-slot:title>{{section.title}}</template>
            </SectionHeader>

            <component :is="section.component"></component>

        </div>

    </SectionWrapper>

</template>

<script setup>
import { defineProps } from 'vue';
import { toRefs } from 'vue';

import SectionWrapper from '@/components/Section/SectionWrapper.vue';
import SectionHeader from '@/components/Section/SectionHeader.vue';

const props = defineProps({
    section: {
        type: Object,
        required: true
    }
});

const { section } = toRefs(props);
</script>

<style scoped>
.section {
    padding: 2rem 0;
}
</style>