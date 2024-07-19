<template>
    <div :class="flexContainerClass" :style="flexStyle">
        <slot></slot>
    </div>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { toRefs } from 'vue';

const props = defineProps({
    direction: {
        type: String,
        default: 'row',
    },
    verticalAlign: {
        type: String,
        default: 'stretch',
    },
    horizontalAlign: {
        type: String,
        default: 'flex-start',
    },
    gap: {
        type: String,
        default: '0',
    },
    wrap: {
        type: String,
        default: 'nowrap',
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

const { direction, verticalAlign, horizontalAlign, gap, wrap, padding, margin } = toRefs(props);

const flexStyle = computed(() => {
    let justifyContent = 'flex-start';
    let alignItems = 'stretch';

    if (direction.value === 'row' || direction.value === 'row-reverse') {
        justifyContent = horizontalAlign.value;
        alignItems = verticalAlign.value;
    } else if (direction.value === 'column' || direction.value === 'column-reverse') {
        justifyContent = verticalAlign.value;
        alignItems = horizontalAlign.value;
    }

    return {
        display: 'flex',
        flexDirection: direction.value,
        justifyContent: justifyContent,
        alignItems: alignItems,
        gap: gap.value,
        flexWrap: wrap.value,
        padding: padding.value,
        margin: margin.value,
        width: '100%',
    };
});

const flexContainerClass = computed(() => {
    return {
        'flex-container': true,
    };
});
</script>

<style scoped>
.flex-container {
    display: flex;
}
</style>
