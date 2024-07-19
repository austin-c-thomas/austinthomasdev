<template>
    <div class="view-wrapper" :style="wrapperStyle">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useLayout } from '@/composables/layout.js';

const { headerHeight } = useLayout();

const wrapperStyle = computed(() => {
    return {
        paddingTop: `${headerHeight.value}px`,
        minHeight: '100vh',
        width: '100%',
        maxWidth: 'var(--max-content-width)'
    };
});
</script>