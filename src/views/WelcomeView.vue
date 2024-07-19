<template>
    <ViewWrapper id="welcome">

        <FlexContainer direction="column" gap="1rem">
            <AccentText size="large">Nice to meet you, I'm</AccentText>
            <h1>Austin Thomas</h1>
            <h2>I write software.</h2>
        </FlexContainer>
                
    </ViewWrapper>
</template>

<script setup>
import ViewWrapper from '@/components/layout/Container/ViewWrapper.vue';
import FlexContainer from '@/components/layout/Container/FlexContainer.vue';
import AccentText from '@/components/layout/Text/AccentText.vue';
</script>

<style scoped></style>