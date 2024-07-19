<template>
    <VList class="nav-list" :style="listStyle">
        <FlexContainer :direction="isMobile ? 'column' : 'row'">
            <VListItem 
                v-for="(item, index) in menuItems"
                :key="index"
                :style="itemStyle"
                class="nav-item"
                variant="plain"
                @click="handleItemClick(item.to)"
                rounded
                link
            >
                <AccentText>{{ prependText(index) }}</AccentText>
                {{ item.title }}
            </VListItem>
        </FlexContainer>
    </VList>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useLayout } from '@/composables/layout.js';
import FlexContainer from '@/components/layout/Container/FlexContainer.vue';
import AccentText from '@/components/layout/Text/AccentText.vue';

const { isMobile } = useLayout();

const emit = defineEmits(['navigate']);

const menuItems = ref([
    { title: "About Me", to: "about" },
    { title: "Work History", to: "work-history" },
    { title: "Projects", to: "projects" },
    { title: "Contact", to: "contact" },
]);

const prependText = (index) => {
    return `0${index + 1}.`;
}

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