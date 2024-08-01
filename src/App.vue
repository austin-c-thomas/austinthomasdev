<template>
    <WelcomeScreen v-if="showWelcomeScreen"></WelcomeScreen>
    <Transition name="fade">
        <VApp>
            <SiteHeader></SiteHeader>
            <VMain>
                <FlexContainer class="app-content" direction="column" horizontal-align="center">
                
                <SectionWrapper id="welcome">
                    <WelcomeView></WelcomeView>
                </SectionWrapper>

                <SectionView 
                    v-for="section in sections" 
                    :key="section.id" 
                    :section="section"
                ></SectionView>

                </FlexContainer>
            </VMain>
        </VApp>
    </Transition>
</template>
  
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import WelcomeScreen from '@/components/WelcomeScreen/WelcomeScreen.vue';
import SiteHeader from '@/components/SiteHeader/SiteHeader.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import SectionWrapper from '@/components/Section/SectionWrapper.vue';
import SectionView from '@/components/Section/SectionView.vue';

const store = useStore();
const sections = computed(() => store.getters.sections);

const showWelcomeScreen = ref(true);

onMounted(async () => {
    showWelcomeScreen.value = false;
    // setTimeout(() => {
    //     showWelcomeScreen.value = false;
    // }, 5000);
})
</script>
  
<style scoped>
.v-main {
    padding-top: 0;
}
  
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s ease;
}
  
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

#welcome {
    min-height: 100vh;
}
</style>