<template>
    <div :class="gridContainerClass" :style="gridStyle">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { toRefs } from 'vue';
import { useLayout } from '@/composables/layout.js';

const { isMobile } = useLayout();

const props = defineProps({
    rows: {
        type: Number,
        default: 1,
    },
    rowSizes: {
        type: Array,
        default: () => [],
    },
    columns: {
        type: Number,
        default: 1,
    },
    columnSizes: {
        type: Array,
        default: () => [],
    },
    gap: {
        type: String,
        default: '0',
    },
    padding: {
        type: String,
        default: '0',
    },
    margin: {
        type: String,
        default: '0',
    },
    fitContent: {
        type: Boolean,
        default: false,
    },
});

const { rows, rowSizes, columns, columnSizes, gap, padding, margin, fitContent } = toRefs(props);

const gridStyle = computed(() => {
    let display = 'grid';
    if (isMobile.value) {
        display = 'flex';
    }

    let gridTemplateRows = rows.value ? `repeat(${rows.value}, 1fr)` : 'none';
    if (rowSizes.value.length) {
        gridTemplateRows = rowSizes.value.join(' ');
    }

    let gridTemplateColumns = columns.value ? `repeat(${columns.value}, 1fr)` : 'none';
    if (columnSizes.value.length) {
        gridTemplateColumns = columnSizes.value.join(' ');
    }

    let width = '100%';
    let height = '100%';
    
    if (fitContent.value) {
        width = 'fit-content';
        height = 'fit-content';
    }

    const style = {
        display: display,
        gridTemplateRows,
        gridTemplateColumns,
        gap: gap.value,
        padding: padding.value,
        margin: margin.value,
        width: width,
        height: height,
    }

    if (isMobile.value) {
        style.flexDirection = 'column';
    }

    return style;
});

const gridContainerClass = computed(() => {
    return {
        'grid-container': true,
    };
});
</script>

<style scoped>
.grid-container {
    display: grid;
}
</style>
