<template>
    <VApp>
        <SiteHeader></SiteHeader>
        <VMain>
            <FlexContainer class="app-content" direction="column" horizontal-align="center" padding="var(--content-padding)">
                <WelcomeView></WelcomeView>
                <AboutView></AboutView>
                <WorkHistoryView></WorkHistoryView>
                <ProjectsView></ProjectsView>
                <ContactView></ContactView>
            </FlexContainer>
        </VMain>
    </VApp>
</template>

<script setup>
import FlexContainer from '@/components/layout/Container/FlexContainer.vue';
import SiteHeader from '@/components/SiteHeader/SiteHeader.vue';
import WelcomeView from '@/views/WelcomeView.vue';
import AboutView from '@/views/AboutView.vue';
import WorkHistoryView from '@/views/WorkHistoryView.vue';
import ProjectsView from '@/views/ProjectsView.vue';
import ContactView from '@/views/ContactView.vue';
</script>

<style scoped>
.v-main {
    padding-top: 0;
}
</style>
