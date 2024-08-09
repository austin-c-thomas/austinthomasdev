<template>
    <VList class="nav-list" :style="listStyle">
        <FlexContainer :direction="isMobile ? 'column' : 'row'">
            <VListItem 
                v-for="(item, index) in menuItems"
                :key="index"
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
        fontSize: isMobile.value ? '1.25rem' : '1rem',
    }
});
</script>