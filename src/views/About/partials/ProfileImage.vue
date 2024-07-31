<template>
    <VImg 
        class="profile-photo"
        :src="ProfilePhotoSrc" 
        alt="Austin Thomas" 
    />
</template>

<script setup>
import ProfilePhotoSrc from "@/assets/images/ProfilePhoto.png";
</script>

<style scoped>
.profile-photo,
.profile-photo::after {
    max-width: 300px;
    width: auto;
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
    background-color: var(--accent-secondary);
    mix-blend-mode: color;
    transition: background-color 0.3s ease;
}

.profile-photo:hover::after {
    background-color: var(--accent-primary);
}

</style>