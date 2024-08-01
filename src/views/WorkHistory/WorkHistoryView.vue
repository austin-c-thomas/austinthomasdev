<template>
    <div class="section">

        <VTimeline side="end">
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
                                
                                <template v-slot:prepend>
                                    <VIcon color="primary" icon="mdi-code-tags"></VIcon>
                                </template>
                                
                                <DynamicBullet
                                    :content="bullet.content"
                                    :links="bullet.links"
                                ></DynamicBullet>

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
import DynamicBullet from '@/components/DynamicBullet/DynamicBullet.vue';

const workHistory = ref([
    {
        company: "Ezoic",
        companyLink: "https://ezoic.com",
        title: "Software Engineer II",
        from: "Jan 2023",
        to: "Present",
        bullets: [
            {
                content: "Lead end-to-end feature development for Support Engineering, {{0}}, {{1}}, {{2}}, and more",
                links: [
                    { type: "InternalLink", props: { section: "projects", project: "ai-chatbot"}, text: "generative AI chatbot"},
                    { type: "InternalLink", props: { section: "projects", project: "help-center-revamp"}, text: "AI-powered Ezoic Knowledgebase revamp"},
                    { type: "InternalLink", props: { section: "projects", project: "email-ticket-processor"}, text: "email ticket processing"},
                ]
            },
            {
                content: "Architected robust Golang APIs and cron jobs to drive key business initiatives",
                links: [],
            },
            {
                content: "Optimized Support infrastructure using Ansible, Bash, and AWS services (Codebuild/ECR/EC2/CloudWatch), resulting in simplified deployment and improved system reliability",
                links: [],
            },
            {
                content: "Led task prioritization and coordination for the Support Engineering team, ensuring timely delivery of features and bug fixes",
                links: [],
            }
        ],
    },
    {
        company: "Ezoic",
        companyLink: "https://ezoic.com",
        title: "Software Engineer I",
        from: "July 2021",
        to: "Jan 2023",
        bullets: [
            {
                content: "Collaborated on full-stack feature development for publisher support properties, navigating complex open-source license restrictions",
                links: [],
            },
            {
                content: "Migrated critical services from legacy PHP to Golang, enhancing system performance and codebase maintainability",
                links: [],
            },
            {
                content: "Took initiative by creating platform-wide solutions beyond role expectations, including a {{0}} and {{1}} with third-party password manager APIs",
                links: [
                    { type: "InternalLink", props: { section: "projects", project: "contractor-login-system"}, text: "centralized contractor login system"},
                    { type: "InternalLink", props: { section: "projects", project: "credential-share"}, text: "secure credential sharing integration"},
                ]
            }
        ],
    },
    {
        company: "",
        companyLink: "",
        title: "Freelance Web Developer",
        from: "October 2020",
        to: "Present",
        bullets: [
            {
                content: "Designed and developed responsive, accessible websites for small businesses, focusing on lead generation and conversion-oriented user experiences",
                links: [],
            },
            {
                content: "Implemented custom solutions using diverse tech stack (PHP, JavaScript, React/Next.js, CSS) and deployed on cloud platforms (Heroku, Netlify) to meet client requirements",
                links: [],
            }
        ],
    }
])
</script>

<style scoped></style>