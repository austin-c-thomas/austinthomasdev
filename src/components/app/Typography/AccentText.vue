<template>
    <span :class="accentTextClass" :style="accentTextStyle">
        <slot></slot>
    </span>
</template>

<script setup>
import { computed, defineProps } from 'vue';

const props = defineProps({
    size: {
        type: String,
        default: () => '',
    },
    color: {
        type: String,
        default: () => 'accent-primary',
    },
})

const accentTextStyle = computed(() => {

    const style = {
        color: 'var(--accent-primary)',
        fontFamily: 'var(--font-family-code)',
        fontWeight: '400',
    }

    if (!props) return style;

    if (props.color) {
        style.color = `var(--${props.color})`;
    }

    if (props.size) {
        if (props.size === 'small') {
            style.fontSize = 'var(--font-size-body-small)';
        } else if (props.size === 'med') {
            style.fontSize = 'var(--font-size-body-default)';
        } else if (props.size === 'large') {
            style.fontSize = 'var(--font-size-body-large)';
        }
    }

    return style;
});

const accentTextClass = computed(() => {
    return {
        'accent-text': true,
    };
});
</script>

<style scoped>
.accent-text {
    color: var(--accent-primary);
    font-family: var(--font-family-code);
}
</style>
