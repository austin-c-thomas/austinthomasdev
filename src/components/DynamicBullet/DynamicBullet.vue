<template>
    <span class="dynamic-bullet">
        <template v-for="(part, index) in parsedContent" :key="index">
            
            <component v-if="part.isComponent"
                :is="part.type"
                v-bind="part.props"
            >{{ part.text }}</component>
        
            <template v-else>{{ part }}</template>

        </template>
    </span>
</template>
  
<script setup>
import { computed } from 'vue';

const props = defineProps({
    content: {
        type: String,
        required: true
    },
    links: {
        type: Array,
        default: () => []
    }
});

const parsedContent = computed(() => {
  
    // Start with the full content as a single string in an array
    let content = [props.content];
  
    props.links.forEach((link, index) => {
        
        const placeholder = `{{${index}}}`;

        content = content.flatMap(part => {

            // If the part is not a string (i.e., it's already a component), leave it as is
            if (typeof part !== 'string') return [part];
      
            // Split the string part by the current placeholder
            const segments = part.split(placeholder);

            return segments.flatMap((segment, i) => {
        
                // If it's the last segment, just return it (no component after)
                if (i === segments.length - 1) return [segment];
                
                // Otherwise, return the segment followed by the component object
                return [ segment, { isComponent: true, type: link.type, props: link.props, text: link.text } ];
            });
        });
    });

    return content;
});
</script>

<style scoped>
.dynamic-bullet {
    color: var(--text-secondary);
    font-size: var(--font-size-body-default);
    line-height: var(--line-height-body-default);
    font-weight: var(--font-weight-body-default);
    letter-spacing: var(--letter-spacing-body-default);
}
</style>