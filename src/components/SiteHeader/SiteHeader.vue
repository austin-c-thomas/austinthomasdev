<template>
    <VAppBar
        id="site-header"
        class="transition"
        :elevation="isScrolled ? 4 : 0"
        :class="{ 'site-header--isScrolled': isScrolled }"
    >
        <FlexContainer horizontal-align="space-between" vertical-align="center" padding="0 1rem" >
            
            <LogoButton></LogoButton>
    
            <template v-if="isMobile">
                <VBtn icon @click="toggleNavigationDrawer">
                    <VIcon>mdi-menu</VIcon>
                </VBtn>
            </template>

            <template v-else>
                <SiteNavigation></SiteNavigation>
            </template>

        </FlexContainer>
    </VAppBar>

    <VNavigationDrawer 
        v-if="isMobile" 
        v-model="drawer"
        class="nav-drawer" 
        location="right" 
        :width="viewportWidth" 
        temporary
    >
        <SiteNavigation @navigate="closeNavigationDrawer" />
    </VNavigationDrawer>
</template>
  
<script setup>
import { ref } from "vue"; 
import { useLayout } from "@/composables/layout.js";
import FlexContainer from "@/components/layout/Container/FlexContainer.vue";
import LogoButton from "@/components/SiteHeader/LogoButton.vue";
import SiteNavigation from "@/components/SiteHeader/SiteNavigation.vue";

const { isMobile, viewportWidth, isScrolled } = useLayout();

const drawer = ref(false);

const toggleNavigationDrawer = () => {
    drawer.value = !drawer.value;
};

const closeNavigationDrawer = () => {
    drawer.value = false;
};
</script>
  
<style scoped>
#site-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

.nav-drawer {
    border: none;
}
</style>
