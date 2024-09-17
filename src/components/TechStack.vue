<script setup>
    import { reactive } from 'vue';
    import Skill from './Skill.vue'

    const listSkill = reactive([
    {
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        alt: "python3",
    },
    {
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
        alt: "go",
    },
    {
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        alt: "typescript",
    },
    {
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        alt: "javascript",
    },
    {
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
        alt: "html5",
    },
    {
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
        alt: "css3",
    },
    {
        imgLink: "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
        alt: "boostrap",
    },
    {
        imgLink: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
        alt: "tailwind",
    },
    {
        imgLink: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
        alt: "postgresql",
    }
])
</script>

<template>
    <div class="pt-5">
        <p class="pb-2 text-lg">Tech Stack</p>
        
        <div class="flex flex-row flex-wrap justify-center mx-2 sm:mx-5">
            <div v-for="(data, index) in listSkill" :key="index">
                    <Skill 
                        :alt="data.alt" 
                        :width="55" 
                        :imgLink="data.imgLink" 
                    />
            </div>
        </div>
    </div>
</template>