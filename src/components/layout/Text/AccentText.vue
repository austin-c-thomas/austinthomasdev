<template>
    <span :class="accentTextClass" :style="accentTextStyle">
        <slot></slot>
    </span>
</template>

<script setup>
import { computed } from 'vue';

const accentTextStyle = computed(() => {
    return {
        color: 'var(--accent-primary)',
        fontFamily: 'var(--font-family-code)',
        fontWeight: '400',
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
