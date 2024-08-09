<template>
    <div class="section">

        <div class="project-interface">

            <VList class="project-list">
                <VListItem 
                    class="project-list-item"
                    v-for="project in projects" 
                    :key="project.id" 
                    @click="selectProject(project.id)"
                    :active="selectedProject.id === project.id"
                    rounded
                >
                    <template v-slot:prepend>
                        <div class="project-list-item--prepend"></div>
                    </template>

                    <div class="project-list-item--content">
                        {{ project.title }}
                    </div>
                </VListItem>
            </VList>

            <ProjectCard :project-data="selectedProject"></ProjectCard>

        </div>

    </div>    
</template>

<script setup>
import { computed } from 'vue';
import { useNavigation } from '@/composables/navigation.js';
import { useStore } from 'vuex';
import ProjectCard from './partials/ProjectCard.vue';

const { currentProject, selectProject } = useNavigation();

const store = useStore();

const projects = computed(() => store.getters.projectList || []);

const selectedProject = computed(() => {
    const defaultProject = projects.value[0];
    
    if (!currentProject.value) {
        return defaultProject;
    }

    return projects.value.find(project => project.id === currentProject.value) || defaultProject;


})
</script>

<style scoped>
.project-interface {
    display: grid;
    grid-template-columns: 250px 1fr;
    gap: 2rem;
}

@media screen and (max-width: 768px) {
    .project-interface {
        display: flex;
        flex-direction: column;
    }

    .project-list {
        display: flex;
        flex-wrap: wrap;
        gap: 0.25rem;
    }

    .project-list-item--prepend {
        display: none;
    }
}

.project-list-item--prepend {
    height: 100%;
    width: 4px;
    background: var(--text-secondary);
    opacity: 0.2;
}

.v-list-item--active .project-list-item--prepend {
    background: var(--accent-secondary);
    opacity: 1;
}

.project-list-item--content {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}


</style>