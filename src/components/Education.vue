<script setup>
    import { reactive } from 'vue';
    
    const listEducation = reactive([
        {
            title: "Computer Science",
            years: "2022-Present",
            place: "Universitas Dian Nusantara"
        },
        {
            title: "Data Science",
            years: "2023-2024",
            place: "Dicoding x IDCamp"
        }
    ])
</script>

<template>
    <div class="pt-5">
        <p class="pb-2 text-lg">Education</p>
    </div>

    <div class="flex flex-row">
        <div class="text-zinc-600 w-full space-y-4">
            
            <div class="flex flex-col space-y-2">
                <div class="flex justify-between ml-2 flex-wrap">
                    <div class="flex flex-row space-x-2 w-8/12 sm:w-9/12 md:w-8/12 lg:w-9/12 xl:w-10/12">
                        <div class="">
                            <img 
                                height="32" width="32" 
                                src="/kampus.png" alt="logo undira" 
                                class="rounded-lg"
                            >
                        </div>
                        <div class="w-full">
                            <p class="text-black text-base">Computer Science</p>
                            <p class="text-sm">Universitas Dian Nusantara</p>
                        </div>
                    </div>

                    <p class="w-4/12 sm:w-3/12 md:w-4/12 lg:w-3/12 xl:w-2/12 text-end">2022-Present</p>
                </div>

                <!-- <div class="flex flex-col ml-12 w-11/12 text-justify space-y-2">
                    <p>Ensuring the accuracy and reliability of precision measurement instruments. Responsible to equipment analysis and adjustment, detailed documentation, and troubleshooting of complex measurement tools.</p>
                    
                    <ul class="list-disc text-justify ml-4">
                                <li>Implementation of measuring instruments and testing such as dial gauges, pressure gauges, weighing scales, and calipers to ensure accuracy within ±0.5% tolerance.</li>
                                <li>Led  and  increased  team  performance  by  enforcing  detail  inspections  and  quality 
                                    standards, eliminated root causes, resulting in achievement of over 95% quality targets.</li>
                                <li>Coordinated  production  schedules  across  multiple  divisions  guaranteed  on-time  and 
                                    high-quality delivery, exceeding user satisfaction expectations.</li>
                                <li>Proactively Identified quality and production issues, preventing delays, and minimizing 
                                    production downtime, resulting smooth production flow, and maximized output.</li>
                                <li>Calibrated over  1,000 instruments annually; >15 portable measuring instruments and >54 machines per day.</li>
                        </ul>
                </div> -->
            </div>

            <div class="flex justify-between ml-2 flex-wrap">
                <div class="flex flex-row space-x-2 w-8/12 sm:w-9/12 md:w-8/12 lg:w-9/12 xl:w-10/12">
                    <div class="">
                        <img 
                            height="32" width="32" 
                            src="/dicoding.jpeg" alt="logo undira" 
                            class="rounded-lg"
                        >
                    </div>
                    <div class="w-full">
                        <p class="text-black text-base">Data Science</p>
                        <p>IDCamp 2023 X Dicoding</p>
                    </div>
                </div>

                <p class="w-4/12 sm:w-3/12 md:w-4/12 lg:w-3/12 xl:w-2/12 text-end">2023-2024</p>
            </div>

        </div>
    </div>
</template>