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
    fitContent: {
        type: Boolean,
        default: false,
    }
});

const { direction, verticalAlign, horizontalAlign, gap, wrap, padding, margin, fitContent } = toRefs(props);

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

    let width = '100%';
    let height = '100%';
    
    if (fitContent.value) {
        width = 'fit-content';
        height = 'fit-content';
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
        width: width,
        height: height,
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
