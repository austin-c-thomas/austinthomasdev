<template>
    <div class="section-header">

        <h2 v-if="$slots.title || !$slots.default" class="section-header--title">

            <AccentText v-if="$slots.titlePrepend" class="section-header--title-prepend">
                <slot name="titlePrepend"></slot>
            </AccentText>
        
            <slot name="title">
                <slot></slot>
            </slot>
        </h2>
    </div>
</template>

<script setup>
import AccentText from '@/components/layout/Text/AccentText.vue';
</script>

<style scoped>
.section-header {
    margin-bottom: 1rem;
}

.section-header--title-prepend {
    font-size: var(--font-size-h4);
}
</style>