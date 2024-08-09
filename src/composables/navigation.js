import { computed } from 'vue';
import { useStore } from 'vuex';

export function useNavigation() {

    // Setup
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