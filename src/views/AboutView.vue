<template>
    <div class="about">
        <GridContainer :columns="2" :column-sizes="['2fr', '1fr']" :gap="containerGap">

        <div class="about--content">
            <p>I wasn't always in tech. I spent some great years navigating the fast-paced service industry, competing in business plan competitions, and once ran a marketing campaign for a fiction author. These experiences shaped my resilience, people skills, and work ethic, but also highlighted something missing: the ability to solve difficult puzzles in a creative way.</p>
            <p>When I stumbled into software I found that missing piece, and I've happily hustled every day since to build a career here.</p>
            <p>As an engineer, I excel in blending big-picture thinking with detail-oriented precision. My approach to new tasks and features is about deeply understanding issues, challenging norms, and delivering solutions that address root causes, not just symptoms. My focus is on developing scalable and efficient solutions with a keen eye for edge cases and long-term impacts. Faced with a challenge, I find a way to get it done, and to a high caliber.</p>
        </div>

        <div class="about--image">
            <VImg 
                class="profile-photo"
                :src="ProfilePhotoSrc" 
                alt="Austin Thomas" 
            />
        </div>

        </GridContainer>
    </div>

</template>

<script setup>
import { computed } from 'vue'; 
import { useLayout } from '@/composables/layout.js';
import GridContainer from '@/components/layout/Container/GridContainer.vue';
import ProfilePhotoSrc from "@/assets/images/ProfilePhoto.png";

const { isMobile, isTablet } = useLayout();

const containerGap = computed(() => {
    if (isMobile.value) {
        return '2rem';
    } else if (isTablet.value) {
        return '4rem';
    }

    return '8rem';

});
</script>

<style scoped>
.about {
    padding: 2rem 0;
}

.about--content p {
    margin-bottom: 2rem;
}

.profile-photo,
.profile-photo img {
    max-width: 300px;
    width: auto;
}

.profile-photo,
.profile-photo::after {
    border-radius: 10px;
}

.profile-photo {
    position: relative;
    overflow: hidden;
}

.profile-photo::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--accent-primary);
    mix-blend-mode: color;
    transition: opacity 0.3s ease;
}

.profile-photo::after {
    opacity: 1;
}

.profile-photo:hover::after {
    opacity: 0;
}
</style>