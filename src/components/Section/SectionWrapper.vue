<template>
    <div class="section-wrapper" :style="wrapperStyle">
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
        paddingBottom: `var(--content-padding-top-bottom)`,
        paddingRight: 'var(--content-padding-left-right)',
        paddingLeft: 'var(--content-padding-left-right)',
        width: '100%',
        maxWidth: 'var(--max-content-width)',
        minHeight: '90vh',
    };
});
</script>