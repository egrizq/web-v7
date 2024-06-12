<script setup>
    import Experience from './components/Experience.vue'
    import Education from './components/Education.vue'
    import LeetCode from "./components/LeetCode.vue";    
    import Hover from './components/Hover.vue'
</script>

<template>
    <div class="ml-1 text-sm" 
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="800">

        <p class="text-zinc-600 text-justify">
            Thrive on building and optimizing systems. 
            Leveraging my expertise in analysis, programming, and problem-solving to build impactful products.
        </p>
    
        <Experience />
        <Education />
        <LeetCode />
        <Hover />
    </div>

</template>