<script setup>
    import Education from './components/Education.vue'
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
    
        <div class="flex flex-col pt-5">
            <p class="pb-2 text-lg">Experience</p>
            
            <div class="flex flex-row space-x-1">
                <div class="text-zinc-600 w-full">
                    <ul class="ml-5">
                        <li class="list-disc">
                            <div class="flex flex-row justify-between">
                                <p class="text-base text-black">Calibration Engineering</p>
                                <p>2021-2023</p>
                            </div>
                            <p>PT. Suryaraya Rubberindo Industries</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    
        <Education />
    </div>

</template>