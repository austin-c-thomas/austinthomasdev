<template>
    <VApp>
        <SiteHeader></SiteHeader>
        
        <VMain>
            <WelcomeView></WelcomeView>
            <AboutView></AboutView>
            <WorkHistoryView></WorkHistoryView>
            <ProjectsView></ProjectsView>
            <ContactView></ContactView>
        </VMain>

    </VApp>
</template>

<script setup>
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
