<template>
    <VList class="nav-list" :style="listStyle">
        <FlexContainer :direction="isMobile ? 'column' : 'row'">

            <template v-for="(item, index) in menuItems" :key="index">

                <VDivider v-if="isMobile" class="divider"></VDivider>

                <VListItem 
                    :style="itemStyle"
                    class="nav-item"
                    variant="plain"
                    @click="handleItemClick(item.id)"
                    rounded
                    link
                >
                    <AccentText>{{ item.titlePrepend }}</AccentText>
                    {{ item.navText }}
                </VListItem>

            </template>

            <VDivider v-if="isMobile" class="divider"></VDivider>

            <VListItem class="cta-button">
                <VBtn
                    :variant="isMobile ? 'outlined' : 'tonal'"
                    :size="isMobile ? 'large' : 'default'"
                    color="primary"
                    href="/resume.pdf"
                    target="_blank"
                >Resume</VBtn>
            </VListItem>
        </FlexContainer>
    </VList>
</template>

<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useLayout } from '@/composables/layout.js';

const { isMobile } = useLayout();

const emit = defineEmits(['navigate']);

const store = useStore();

const menuItems = computed(() => store.getters.sections);

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

const handleItemClick = (sectionId) => {
    scrollToSection(sectionId);
    emit('navigate');
}

const listStyle = computed(() => {
    return {
        padding: isMobile.value ? '1rem' : 'auto',
    }
});

const itemStyle = computed(() => {
    return {
        width: isMobile.value ? '100%' : 'fit-content',
        fontSize: isMobile.value ? '1.5rem' : '1rem',
    }
});
</script>

<style scoped>
.divider {
    width: 100%;
    margin: 0.5rem 0;
    color: var(--text-secondary);
}

.cta-button {
    margin: 2rem 0;
}
</style>