<template>
    <a
        class="app-link external-link transition"
        :href="props.href"
        target="_blank"
        rel="noopener nofollow"
    >
        <slot></slot>
    </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    href: {
        type: String,
        required: true
    }
})
</script>