<template>

    <FlexContainer direction="column" vertical-align="center" gap="4rem">
        
        <FlexContainer direction="column" vertical-align="center" gap="2rem" fit-content>
            <div class="accent-text">
                <AccentText class="accent-text">Fullstack Software Engineer</AccentText>
            </div>

            <div class="hook">
                <h1 class="welcome--title">Hi, I'm Austin.</h1>
                <span class="welcome--subtitle color-text-secondary">I make things happen with code.</span>
            </div>

            <div class="statement">
                <p>I'm a fullstack software engineer located near San Diego, California. I like long walks on the beach, service-repository patterns, and that feeling you get after deleting a bunch of unused code.</p>
            </div>
        </FlexContainer>
        
        <!-- <FlexContainer fit-content>
            <div class="cta">
                <VBtn
                    variant="outlined"
                    color="primary"
                    size="large"
                >Resume</VBtn>
            </div>
        </FlexContainer> -->

    </FlexContainer>
            
</template>

<script setup></script>

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