<template>
    <a
        class="app-link internal-link transition"
        :href="'#' + props.section"
        @click.prevent="handleFollowLink"
    >
        <slot></slot>
    </a>
</template>

<script setup>
import { defineProps } from 'vue'
import { useNavigation } from '@/composables/navigation.js';

const props = defineProps({
    section: {
        type: String,
        required: true
    },
    project: {
        type: String,
        default: () => ""
    }
})

const { navigateToSection, selectProject } = useNavigation();

const handleFollowLink = () => {
    navigateToSection(props.section);
    
    if (props.project) {
        selectProject(props.project);
    }
}
</script>