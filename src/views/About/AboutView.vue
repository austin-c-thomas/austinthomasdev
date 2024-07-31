<template>
    <div class="about">
        
        <div class="about--main">
            <div class="about--content">
                <p>What do you get when you take a service industry hustler/entrepreneurship major and teach them to write code? Someone who gets sh*t done.</p>

                <p>Hi, I'm Austin. 
                Since my transition into tech in 2020, I've had the privilege to work as a freelancer and Software Engineer at an <ExternalLink href="https://ezoic.com">adtech startup</ExternalLink>,
                where I'm responsible for end-to-end development of <InternalLink section="projects">publisher support products</InternalLink>.
                My approach to new projects and features is to deeply understand the root issue or goal at both the business level and the technical level, unafraid to ask questions and challenge norms. 
                Then I deliver scalable, efficient solutions that look good on the frontend and <i>feel</i> good on the backend.
                </p>

                <p>Paragraph with more technical details</p>
            </div>

            <div class="about--image">
                <ProfileImage></ProfileImage>
            </div>
        </div>

        <TechStack></TechStack>
        

    </div>

</template>

<script setup>
import { useNavigation } from '@/composables/navigation.js';
import ProfileImage from './partials/ProfileImage.vue';
import TechStack from './partials/TechStack.vue';
const { navigateToSection } = useNavigation();
</script>

<style scoped>
.about {
    padding: 2rem 0;
}

.about--main {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 8rem;
}

.about--content p {
    margin-bottom: 2rem;
}

@media screen and (max-width: 1024px) {
    .about--main {
        gap: 4rem;
    }
}

@media screen and (max-width: 768px) {
    .about--main {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
}
</style>