<template>

    <FlexContainer direction="column" vertical-align="center" gap="4rem">
        
        <FlexContainer direction="column" vertical-align="center" gap="2rem" fit-content>
            <div class="accent-text">
                <AccentText class="accent-text">Fullstack Software Engineer</AccentText>
            </div>

            <div class="hook">
                <h1 class="welcome--title">Hi, I'm Austin.</h1>
                <span class="welcome--subtitle color-text-secondary">Tagline goes here.</span>
            </div>

            <div class="statement">
                <p>I'm a versatile developer specializing in building cutting-edge products from the ground up. With expertise in Golang, PHP, MySQL, and Vue, I excel at creating robust APIs, implementing third-party integrations, and developing generative AI features. Currently at Ezoic, I'm passionate about turning complex challenges into elegant, user-friendly solutions.</p>
            </div>
        </FlexContainer>
        
        <FlexContainer fit-content>
            <div class="cta">
                <VBtn
                    variant="outlined"
                    color="primary"
                    size="large"
                >Resume</VBtn>
            </div>
        </FlexContainer>

    </FlexContainer>
            
</template>

<script setup>
import FlexContainer from '@/components/layout/Container/FlexContainer.vue';
import AccentText from '@/components/layout/Text/AccentText.vue';
</script>

<style scoped>
.accent-text {
    font-size: 1.25rem;
}

.welcome--subtitle {
    font-size: var(--font-size-h2-large);
    line-height: var(--line-height-h2-large);
    font-weight: var(--font-weight-h2-large);
    letter-spacing: var(--letter-spacing-h2-large);
    color: var(--text-secondary);
}
</style>