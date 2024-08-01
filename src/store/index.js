import { defineAsyncComponent } from "vue";
import { createStore } from "vuex";

const sectionComponents = {
    'welcome': defineAsyncComponent(() => import('@/views/WelcomeView.vue')),
    'about': defineAsyncComponent(() => import('@/views/About/AboutView.vue')),
    'work-history': defineAsyncComponent(() => import('@/views/WorkHistory/WorkHistoryView.vue')),
    'projects': defineAsyncComponent(() => import('@/views/ProjectsView.vue')),
    'contact': defineAsyncComponent(() => import('@/views/ContactView.vue')),
}

const store = createStore({
    state: {
        sections: [
            // {
            //     id: "welcome",
            //     title: "Welcome",
            //     titlePrepend: "",
            // },
            { 
                id: "about", 
                title: "About Me", 
                titlePrepend: "", 
            },
            { 
                id: "work-history", 
                title: "Work History", 
                titlePrepend: "", 
            },
            { 
                id: "projects", 
                title: "Projects", 
                titlePrepend: "",
            },
            { 
                id: "contact", 
                title: "Contact", 
                titlePrepend: "", 
            },        
        ]
    },
    actions: {},
    mutations: {},
    getters: {
        sections: (state) => state.sections.map((section, index) => ({
            ...section,
            titlePrepend: `0${index + 1}. `,
            component: sectionComponents[section.id]
        })),
    },
});

export default store;