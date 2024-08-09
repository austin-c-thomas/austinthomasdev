<template>
    <div class="section">

        <FlexContainer direction="column" gap="2rem">
            <span class="contact--subtitle">Want to say hi?</span>
            <p class="large">Got questions about my work or just want to talk tech? Let's connect!</p>

            <FlexContainer gap="2rem">
                <VBtn :size="buttonSize" rounded="circle" href="https://github.com/austin-c-thomas" target="_blank">
                    <VIcon 
                        icon="mdi-github"
                        :size="iconSize"
                    ></VIcon>
                </VBtn>

                <VBtn :size="buttonSize" rounded="circle" href="https://www.linkedin.com/in/austin-c-thomas" target="_blank">
                    <VIcon 
                        icon="mdi-linkedin"
                        :size="iconSize"
                    ></VIcon>
                </VBtn>

                <VBtn :size="buttonSize" rounded="circle" href="mailto:austinthomas.dev@gmail.com" target="_blank">
                    <VIcon 
                        icon="mdi-email"
                        :size="iconSize"
                    ></VIcon>
                </VBtn>
            </FlexContainer>
        </FlexContainer>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const iconSize = ref(48);
const buttonSize = computed(() => iconSize.value * 1.2);

</script>

<style scoped>
.contact--subtitle {
    font-size: var(--font-size-h1);
    line-height: var(--line-height-h1);
    font-weight: var(--font-weight-h1);
    letter-spacing: var(--letter-spacing-h1);
    color: var(--text-primary);
}
</style>