<template>
    <div class="section">

        <VTimeline side="end" density="compact">
            <VTimelineItem v-for="(position, index) in workHistory" :key="index">
                <template v-slot:icon>
                    <VAvatar image=""></VAvatar>
                </template>
                <VCard>
                    <VCardTitle>
                        {{ position.title }}
                        <span v-if="position.company"> @ <ExternalLink :href="position.companyLink">{{ position.company }}</ExternalLink></span>
                    </VCardTitle>
                    <VCardText>
                        <VList>
                            <VListItem v-for="(bullet, idx) in position.bullets" :key="idx">
                                
                                <template v-slot:prepend>
                                    <VIcon color="primary" icon="mdi-code-tags"></VIcon>
                                </template>
                                
                                <DynamicBullet
                                    :content="bullet.content"
                                    :links="bullet.links"
                                ></DynamicBullet>

                            </VListItem>
                        </VList>
                    </VCardText>
                </VCard>
            </VTimelineItem>
        </VTimeline>


    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useLayout } from '@/composables/layout.js';
import DynamicBullet from '@/components/DynamicBullet/DynamicBullet.vue';

const store = useStore();

const workHistory = computed(() => store.getters.workHistory || []);

const { isMobile } = useLayout();

const wrapperComponent = computed(() => {
    if (isMobile.value) {
        return "FlexContainer";
    }

    return "VTimeline";
});

const itemComponent = computed(() => {
    if (isMobile.value) {
        return "div";
    }

    return "VTimelineItem";
})

</script>

<style scoped></style>