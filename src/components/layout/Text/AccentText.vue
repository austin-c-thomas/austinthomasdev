<template>
    <span :class="accentTextClass" :style="accentTextStyle">
        <slot></slot>
    </span>
</template>

<script setup>
import { computed, defineProps } from 'vue';
import { toRefs } from 'vue';

const props = defineProps({
    size: {
        type: String,
        default: '',
    },
});

const { size } = toRefs(props);

const accentTextStyle = computed(() => {
    let fontSize = 'var(--font-size-body-default)';

    if (size.value === 'large') {
        fontSize = 'var(--font-size-body-large)';
    } else if (size.value === 'small') {
        fontSize = 'var(--font-size-body-small)';
    } else if (size.value !== '') {
        fontSize = size.value;
    }

    return {
        color: 'var(--accent-primary)',
        fontFamily: 'var(--font-family-code)',
        fontWeight: '400',
        fontSize,
    };
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
