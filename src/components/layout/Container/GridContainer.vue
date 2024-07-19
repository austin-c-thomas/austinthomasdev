<template>
    <div :class="gridContainerClass" :style="gridStyle">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { toRefs } from 'vue';

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
});

const { rows, rowSizes, columns, columnSizes, gap, padding, margin } = toRefs(props);

const gridStyle = computed(() => {
    let gridTemplateRows = rows.value ? `repeat(${rows.value}, 1fr)` : 'none';
    if (rowSizes.value.length) {
        gridTemplateRows = rowSizes.value.join(' ');
    }

    let gridTemplateColumns = columns.value ? `repeat(${columns.value}, 1fr)` : 'none';
    if (columnSizes.value.length) {
        gridTemplateColumns = columnSizes.value.join(' ');
    }

    return {
        display: 'grid',
        gridTemplateRows,
        gridTemplateColumns,
        gap: gap.value,
        padding: padding.value,
        margin: margin.value,
        width: '100%',
    };
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
