<script setup>
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

</script>

<template>
    <div class="flex flex-col pt-5">
        <p class="pb-2 text-lg">Experience</p>
        
        <div class="flex flex-row space-x-1">
            <div class="text-zinc-600 w-full">

                <div class="flex flex-col space-y-2">
                    <div class="flex justify-between ml-2 flex-wrap">
                        <div class="flex flex-row space-x-2 w-8/12 sm:w-9/12 md:w-8/12 lg:w-9/12 xl:w-10/12">
                            <div class="">
                                <img 
                                    height="32" width="32" 
                                    src="/fdr.webp" alt="logo undira" 
                                    class="rounded-lg"
                                >
                            </div>
                            <div class="w-full space-y-4 text-justify">
                                <div class="text-start">
                                    <p class="text-black text-base">Calibration Engineering</p>
                                    <p>Suryaraya Rubberindo Industries</p>
                                </div>
                                    
                            </div>
                        </div>

                        <p class="w-4/12 sm:w-3/12 md:w-4/12 lg:w-3/12 xl:w-2/12 text-end">2021-2023</p>
                    </div>
                    
                    <div class="flex flex-col text-justify space-y-2 pl-11">
                        <Accordion type="single" collapsible>
                            <AccordionItem value="item-1">
                            <AccordionTrigger>Key Achievements in Calibration Engineering</AccordionTrigger>
                            <AccordionContent>
                                <ul class="list-disc pl-5 space-y-1 pt-2">
                                    <li>Led  and  increased  team  performance  by  enforcing  detail  inspections  and  quality standards, eliminated root causes, resulting in achievement of over 95% quality targets.</li>
                                    <li>Coordinated production schedules across multiple divisions guaranteed on-time and high-quality delivery, exceeding user satisfaction expectations.</li>
                                    <li>Proactively Identified quality and production issues, preventing delays and minimizing production downtime, resulting smooth production flow and maximized output.</li>
                                    <li>Implementation of measuring instruments and testing such as dial gauges, pressure gauges, weighing scales, and calipers to ensure accuracy within ±0.5% tolerance.</li>
                                    <li>Calibrated over 1,000 instruments annually; >15 portable measuring instruments and >54 machines per day.</li>
                                </ul>
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div> 
                </div>

            </div>
        </div>
    </div>
</template>