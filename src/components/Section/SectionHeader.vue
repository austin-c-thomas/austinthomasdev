<template>
    <div class="section-header">

        <h2 v-if="$slots.title || !$slots.default" class="section-header--title">

            <AccentText v-if="$slots.titlePrepend" class="section-header--title-prepend">
                <slot name="titlePrepend"></slot>
            </AccentText>
        
            <slot name="title">
                <slot></slot>
            </slot>

            <AccentText v-if="$slots.titleAppend" class="section-header--title-append">
                <slot name="titleAppend"></slot>
            </AccentText>
        </h2>
    </div>
</template>

<script setup></script>

<style scoped>
.section-header {
    margin-bottom: 1rem;
}

.section-header--title-prepend,
.section-header--title-append {
    font-size: var(--font-size-h4);
}
</style>