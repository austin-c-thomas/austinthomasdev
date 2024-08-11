import { computed } from 'vue';
import { useStore } from 'vuex';
import { useLayout } from '@/composables/layout.js';

export function useNavigation() {

    // Setup
    const { isMobile } = useLayout();

    const store = useStore();

    const currentProject = computed(() => store.getters.currentProject);
    const setCurrentProject = async (projectId) => store.dispatch('setCurrentProject', projectId);
    const resetCurrentProject = async () => store.dispatch('setCurrentProject', null);
    
    // ===============================
    // useNavigation
    // -------------------------------
    const navigateToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const selectProject = async (projectId) => {
        await setCurrentProject(projectId);

        if (isMobile.value) {
            navigateToSection(projectId);
        }
    }

    const clearProjectSelection = async () => {
        await resetCurrentProject();
    }

    return {
        currentProject,
        navigateToSection,
        selectProject,
        clearProjectSelection,
    }
}