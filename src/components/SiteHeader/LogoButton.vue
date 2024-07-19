<template>
    <VBtn
        class="logo-button"
        height="auto"
        width="auto"
        variant="plain"
        round
        @click="scrollToSection('welcome')"
    >
        <VImg 
            :src="PersonalLogoSrc" 
            alt="Austin Thomas Dev" 
            :height="logoHeight"
            :width="logoWidth"
        />
    </VBtn>
</template>

<script setup>
import { ref } from 'vue';
import PersonalLogoSrc from "@/assets/images/PersonalLogo.svg";

const logoWidth = ref(40);
const logoHeight = ref(40);

const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>

<style scoped>
.logo-button {
    padding: 8px 0;
}
</style>
