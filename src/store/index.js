import { defineAsyncComponent } from "vue";
import { createStore } from "vuex";

const sectionComponents = {
    'welcome': defineAsyncComponent(() => import('@/views/WelcomeView.vue')),
    'about': defineAsyncComponent(() => import('@/views/About/AboutView.vue')),
    'work-history': defineAsyncComponent(() => import('@/views/WorkHistory/WorkHistoryView.vue')),
    'projects': defineAsyncComponent(() => import('@/views/Projects/ProjectsView.vue')),
    'contact': defineAsyncComponent(() => import('@/views/Contact/ContactView.vue')),
}

const store = createStore({
    state: {
        sections: [
            { 
                id: "about",
                navText: "About", 
                title: "About Me", 
                titlePrepend: "", 
            },
            { 
                id: "work-history",
                navText: "Experience", 
                title: "Work History", 
                titlePrepend: "", 
            },
            { 
                id: "projects", 
                navText: "Work",
                title: "Project Highlights", 
                titlePrepend: "",
            },
            { 
                id: "contact", 
                navText: "Contact",
                title: "", 
                titlePrepend: "", 
                titleAppend: "Contact",
            },        
        ],
        currentProject: null,
        workHistory: [
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
                            { type: "InternalLink", props: { section: "projects", project: "ai-support-chat"}, text: "generative AI chatbot"},
                            { type: "InternalLink", props: { section: "projects", project: "knowledgebase"}, text: "AI-powered Ezoic Knowledgebase revamp"},
                            { type: "InternalLink", props: { section: "projects", project: "email-ticket-processor"}, text: "email ticket processing"},
                        ]
                    },
                    {
                        content: "Architected Golang APIs, microservices and cron jobs to drive key business initiatives",
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
                            { type: "InternalLink", props: { section: "projects", project: "contractor-login"}, text: "centralized contractor login system"},
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
                        content: "Designed and developed {{0}}, focusing on lead generation and conversion-oriented user experiences",
                        links: [
                            { type: "InternalLink", props: { section: "projects", project: "align-wealth-management"}, text: "responsive, accessible websites for small businesses"},
                        ],
                    },
                    {
                        content: "Implemented custom solutions using diverse tech stack (PHP, JavaScript, React/Next.js, CSS) and deployed on cloud platforms (Heroku, Netlify) to meet client requirements",
                        links: [],
                    }
                ],
            }
        ],
        projects: [
            {
                id: "knowledgebase",
                title: "Knowledgebase + Article Editor",
                description: "System for writing and publishing standardized help articles with AI tools",
                content: `<p>The goal: to improve the quality of Ezoic's help center articles <b>and</b> streamline the process of writing them. To accomplish this, I:</p><ul><li>Developed a robust new system for creating help articles using standardized templates and sections</li><li>Built an intuitive multistep form for article editing with AI writing tools, a draft/autosave system, and drag + drop file uploading</li><li>Eliminated the need for contracted translators by implementing automatic translation to all supported languages using an LLM</li><li>Redesigned the client-side of the knowledgebase while navigating opensource license restrictions</li></ul><p>In the words of our UK support team lead: <i>"The new editor is 1000x better."</i></p>`,
                organization: "Ezoic",
                deployed: "Jun 2024",
                technologies: ["Go", "PHP", "Vue 3", "MySQL"],
                apis: ["Anthropic", "OpenAI", "S3"],
            },
            {
                id: "ai-support-chat",
                title: "AI Support Chatbot",
                description: "Generative AI-driven support chatbot",
                content: `<p>Ezoic Support Chat is a generative AI-powered chatbot designed to reduce Support team workload by answering troubleshooting questions for publishers in a conversational manner. As lead developer, I:</p><ul><li>Architected the chat process using an embedding search process, qualifier system, and context-aware LLM prompting</li><li>Developed both frontend and backend codebases + set up a Docker dev environment and deployment pipeline with Ansible and AWS</li><li>Enhanced performance by introducing concurrency and strategic caching</li><li>Engineered an "intelligent" escalation system to determine when human support intervention is necessary</li></ul><p>Six months after launch, we saw approximately a 40% reduction in new support tickets opened.</p>`,
                organization: "Ezoic",
                deployed: "Jun 2023",
                technologies: ["Go", "Vue 3", "MySQL", "Docker", "AWS"],
                apis: ["OpenAI", "S3"],
            },
            {
                id: "align-wealth-management",
                title: "Align Wealth Management",
                description: "Official website for Align Wealth Management",
                content: `<p>Align Wealth Management wanted a stand-out website for client landing and lead generation. I delivered a <a class="app-link external-link transition" href="https://www.alignwealthmgmt.com/" target="_blank" rel="noopener nofollow">custom-built static site</a> written in PHP, CSS, and vanilla JS.</p><ul><li>Interfaced directly with the client to discuss business and project goals, establish project scope, and gather requirements</li><li>Developed a component-based PHP architecture for the frontend code and leveraged YML files for data storage, resulting in easy content updates without a CMS</li><li>Built a multistep contact form with the SendGrid API for lead capture and automated email notifications</li><li>Ensured the site was fully responsive and adhered to accessibility best practices</li></ul>`,
                organization: "Freelance",
                deployed: "Feb 2023",
                technologies: ["PHP", "Composer", "HTML/CSS", "Docker", "Heroku"],
                apis: ["SendGrid"]
            },
            {
                id: "email-ticket-processor",
                title: "Email Ticket Processor",
                description: "System for processing emails in staff inboxes into support tickets",
                content: `<p>The goal: to move account manager/publisher communications out of email and into our ticketing system. This would allow for metrics tracking, better tooling for account managers, and higher touch.</p><ul><li>Created a Google Apps Script that runs on the staffmember's inbox, parsing specific emails and sending them to our API</li><li>Built a Go microservice to process email data, upload attachments, and create tickets in our PHP ticketing app</li><li>Developed a revamped routing system for all tickets (email & web) to funnel into, implementing complex business logic with simplicity</li><li>Interfaced directly with 3rd party devs to build custom tooling / integrations for account managers to ensure seamless transition to the new system</li></ul>`,
                organization: "Ezoic",
                deployed: "Jan 2023",
                technologies: ["Go", "PHP", "MySQL", "Google Apps Script", "Vanilla JS"],
                apis: ["Gmail", "Chili Piper"],
            },
            {
                id: "contractor-login",
                title: "Contractor Login",
                description: "Centralized login system & permissions management for contractors",
                content: `<p>I noticed that multiple teams used external contractors for different tasks, but each team's approach to authentication/permissions management was different (often hardcoded). I decided to build a centralized system to handle this properly.<ul><li>Created a cookie-based authentication & permissions system for external contractors to login and perform designated tasks across the platform</li><li>Coordinated with various teams to get buy-in and ensure seamless integration of the new system into multiple internal services</li><li>Built a secure admin panel to manage external contractors, enable account additions, customize access rights, and automate email invitations for streamlined onboarding</li></ul></p>`,
                organization: "Ezoic",
                deployed: "Oct 2022",
                technologies: ["PHP", "HTML/CSS", "MySQL"],
            },
            {
                id: "credential-share",
                title: "Credential Share System",
                description: "Easy & secure credential sharing between publishers and support staff",
                content: `<p>Prior to this project, publishers often shared sensitive login information directly with Support staff over email or in tickets. Our goal was to protect publishers by creating an easy and secure way to share credentials with us. The solution was to create a simple form that sent credentials directly to a 1Password vault.</p><ul><li>Built a Go microservice to gather and validate form data, then securely send it to a 1Password vault via their API</li><li>Designed a form with validation, then implemented it in two areas: the ticket page (PHP) and the publisher dashboard (Vue)</li><li>Implemented an in-house OAuth solution for secure data transfer between internal APIs</li></ul>`,
                organization: "Ezoic",
                deployed: "Aug 2022",
                technologies: ["Go", "PHP", "Vue 2"],
                apis: ["1Password"],
            },
        ],
    },
    actions: {
        setCurrentProject({ commit }, projectId) {
            commit('SET_CURRENT_PROJECT', projectId);
        },
    },
    mutations: {
        SET_CURRENT_PROJECT(state, value) {
            state.currentProject = value;
        }
    },
    getters: {
        sections: (state) => state.sections.map((section, index) => ({
            ...section,
            titlePrepend: `0${index + 1}. ${section.titlePrepend}`,
            component: sectionComponents[section.id]
        })),
        workHistory: (state) => state.workHistory,
        currentProject: (state) => state.currentProject,
        projectList: (state) => state.projects,
    },
});

export default store;