declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        ExternalLink: typeof import('./Clickable/ExternalLink.vue')['default']
        InternalLink: typeof import('./Clickable/InternalLink.vue')['default']
        FlexContainer: typeof import('./Containment/FlexContainer.vue')['default']
        GridContainer: typeof import('./Containment/GridContainer.vue')['default']
        AccentText: typeof import('./Typography/AccentText.vue')['default']
    }
}
  
export {}