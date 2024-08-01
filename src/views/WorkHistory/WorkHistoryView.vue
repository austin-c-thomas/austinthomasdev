<template>
    <div class="section">

        <VTimeline>
            <VTimelineItem v-for="(position, index) in workHistory" :key="index">
                <template v-slot:icon>
                    <VAvatar image=""></VAvatar>
                </template>
                <VCard>
                    <VCardTitle>
                        {{ position.title }}
                        <span v-if="position.company"> @ <ExternalLink :href="position.companyLink">{{ position.company }}</ExternalLink></span>
                    </VCardTitle>
                    <VCardText>
                        <VList>
                            <VListItem v-for="(bullet, idx) in position.bullets" :key="idx">
                                {{ bullet }}
                            </VListItem>
                        </VList>
                    </VCardText>
                </VCard>
            </VTimelineItem>
        </VTimeline>


    </div>
</template>

<script setup>
import { ref } from 'vue';
import { VCardText, VTimeline, VTimelineItem } from 'vuetify/components';

const workHistory = ref([
    {
        company: "Ezoic",
        companyLink: "https://ezoic.com",
        title: "Software Engineer II",
        from: "Jan 2023",
        to: "Present",
        bullets: [
            "Lead end-to-end feature development for Support Engineering, including a generative AI chatbot, AI-powered Ezoic Knowledgebase revamp, email ticket processing, and more",
            "Architected robust Golang APIs and cron jobs to drive key business initiatives",
            "Optimized Support infrastructure using Ansible, Bash, and AWS services (Codebuild/ECR/EC2/CloudWatch), resulting in simplified deployment and improved system reliability",
            "Led task prioritization and coordination for the Support Engineering team, ensuring timely delivery of features and bug fixes",
        ],
    },
    {
        company: "Ezoic",
        companyLink: "https://ezoic.com",
        title: "Software Engineer I",
        from: "July 2021",
        to: "Jan 2023",
        bullets: [
            "Collaborated on full-stack feature development for publisher support properties, navigating complex open-source license restrictions",
            "Migrated critical services from legacy PHP to Golang, enhancing system performance and codebase maintainability",
            "Took initiative by creating platform-wide solutions beyond role expectations, including a centralized contractor login system and secure credential sharing integration with third-party password manager APIs"
        ],
    },
    {
        company: "",
        companyLink: "",
        title: "Freelance Web Developer",
        from: "October 2020",
        to: "Present",
        bullets: [
            "Designed and developed responsive, accessible websites for small businesses, focusing on lead generation and conversion-oriented user experiences",
            "Implemented custom solutions using diverse tech stack (PHP, JavaScript, React/Next.js, CSS) and deployed on cloud platforms (Heroku, Netlify) to meet client requirements"
        ],
    }
])
</script>

<style scoped></style>