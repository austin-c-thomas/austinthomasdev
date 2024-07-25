<template>
    <FlexContainer 
        v-if="show"
        class="welcome-screen"
        direction="column"
        vertical-align="center"
        horizontal-align="center"
    >
        <VImg 
        class="logo-image animated animate--fadeInDown"
        :src="PersonalLogoSrc" 
        alt="Austin Thomas Dev" 
        :height="logoHeight"
        :width="logoWidth"
        />
        <h2 class="welcome-title large animated animate--typing">Austin Thomas</h2>
        <AccentText class="welcome-subtitle animated animate--typing">Fullstack Software Engineer</AccentText>
    </FlexContainer>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';
import FlexContainer from '@/components/layout/Container/FlexContainer.vue';
import AccentText from '../layout/Text/AccentText.vue';
import PersonalLogoSrc from "@/assets/images/PersonalLogo.svg";

const logoWidth = ref(100);
const logoHeight = ref(100);
const show = ref(false);
  
onMounted(() => {
    setTimeout(() => {
        show.value = true;
    }, 100);
});
  </script>
  
<style scoped>
.welcome-screen {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: var(--bg-primary);
    z-index: 1200;
}

.welcome-screen .logo-image {
    flex: none;
    margin-bottom: 1rem;
}

.logo-image {
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
}

.welcome-title {
    animation-delay: 0.8s;
}

.welcome-subtitle {
    animation-delay: 2s;
    font-size: 2rem;
}
</style>