<template>
    <ViewWrapper id="about">
        <FlexContainer direction="column" gap="1rem" padding="2rem">
            <h2><AccentText>01.</AccentText>About Me</h2>
        </FlexContainer>
    </ViewWrapper>
</template>

<script setup>
import ViewWrapper from '@/components/layout/Container/ViewWrapper.vue';
import FlexContainer from '@/components/layout/Container/FlexContainer.vue';
import AccentText from '@/components/layout/Text/AccentText.vue';
</script>

<style scoped></style>