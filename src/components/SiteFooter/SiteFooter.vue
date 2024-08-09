<template>
    <VFooter>
        <div class="footer--inner">
            <VBtn 
                size="x-small" 
                icon="mdi-source-fork" 
                variant="text" 
                color="primary"
                href="https://github.com/austin-c-thomas/austinthomasdev"
                target="_blank"
            ></VBtn>
            <AccentText class="copywrite-text" color="text-primary" size="small">
                <VIcon icon="mdi-copyright" size="x-small"></VIcon>
                Austin Thomas Dev
                <span>{{ year }}</span>
            </AccentText>
        </div>
    </VFooter>
</template>

<script setup>
import { computed } from 'vue';

const year = computed(() => {
    return new Date().getFullYear();
})
</script>

<style scoped>
.footer--inner {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.copywrite-text {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}
</style>