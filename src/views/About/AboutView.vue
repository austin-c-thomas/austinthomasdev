<template>
    <div class="section">
        <div class="about--main">
            <div class="about--content">
                <p>Hi, I'm Austin. Since my transition into tech in 2020, I've had the privilege to work as a freelancer and Software Engineer at an <ExternalLink href="https://ezoic.com">adtech startup</ExternalLink>,
                where I'm responsible for end-to-end development of <InternalLink section="projects" project="">publisher support products</InternalLink>.</p>
                

                <p>When tackling new projects or features, I like to dive deep. I start by really getting to grips with the core issue or goal, both from a business and technical standpoint. I'm not shy about asking questions or challenging norms. 
                My aim? To create solutions that not only work well and look great, but also scale easily and feel smooth to work with behind the scenes.</p>

                <p>I excel at designing and developing APIs and microservices, have a proven track record of building intuitive, aesthetic frontends, and am actively expanding my skills in cloud infrastructure and deployment.
                At my current company, I'm known best for my experience in building generative AI features and complex integrations.</p>
            </div>

            <div class="about--image">
                <ProfileImage></ProfileImage>
            </div>
        </div>

        <TechStack></TechStack>
    </div>
</template>

<script setup>
import ProfileImage from './partials/ProfileImage.vue';
import TechStack from './partials/TechStack.vue';
</script>

<style scoped>
.section {
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