<template>
    <FlexContainer direction="column" margin="1.5rem 0">
        <h6>Lately I've been using:</h6>
        <div class="technologies">

            <div 
                v-for="(technology, index) in technologies" 
                :key="index" 
                class="technology"
                vertical-align="center"
                gap="1rem"
            >
                <div class="technology--icon transition">
                    <VIcon :icon="technology.icon"></VIcon>
                </div>
                <span class="technology--name">{{ technology.name }}</span>
            </div>
            

        </div>

    </FlexContainer>
</template>

<script setup>
import { ref } from 'vue';
import FlexContainer from '@/components/app/Containment/FlexContainer.vue';

const technologies = ref([
    { name: "Go", icon: "mdi-code-braces" },
    { name: "PHP", icon: "mdi-code-braces" },
    { name: "Vue (2 & 3)", icon: "mdi-xml" },
    { name: "MySQL", icon: "mdi-database" },
    { name: "Docker", icon: "mdi-application-cog-outline" },
    { name: "AWS (EC2, RDS, CloudWatch, + more)", icon: "mdi-application-cog-outline"},
]);
</script>

<style scoped>
.technologies {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 1fr;
    gap: 2rem;
    margin: 2rem 0;
}

.technology {
    display: grid;
    grid-template-columns: 40px auto;
    gap: 1rem;
    align-items: center;
    
}
.technology--icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--accent-secondary);
    height: 40px;
    width: 40px;
    border-radius: 100%;
}

.technology:hover .technology--icon {
    background-color: var(--accent-primary);
}

@media screen and (max-width: 768px) {
    .technologies {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media screen and (max-width: 450px) {
    .technologies {
        grid-template-columns: repeat(1, 1fr);
        gap: 1.25rem;
    }

    .technology--icon {
        height: 32px;
        width: 32px;
    }
}
</style>