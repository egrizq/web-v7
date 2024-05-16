<script setup>
    import { useAos } from './assets/useAos'; 
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'

    useAos();

    onMounted(() => {
        initFlowbite();
    })
</script>

<template>
    <main class="containter mx-auto font-roboto font-semibold py-16 sm:py-20 md:py-36 text-neutral-100 bg-neutral-950 h-screen">
        <div class="flex justify-center bg-neutral-950 pb-14">
            <div class="flex flex-col w-10/12">
                <div class="flex flex-row pb-2" data-aos="fade-up" data-aos-duration="600" data-aos-anchor-placement="top-bottom">
                    <p class="text-xl py-1 text-neutral-600">Hey you!</p>
                    <img width=36 height=auto src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif">
                </div>
                <div class="space-y-3" data-aos="fade-up" data-aos-duration="950" data-aos-anchor-placement="top-bottom">
                    <div class="flex flex-wrap sm:flex-row text-2xl md:text-3xl space-x-2">
                        <span class="text-neutral-600">My Name is</span>
                        <span>Muhammad Rizq Ramadhan</span>
                    </div>
                    <div class="flex flex-wrap sm:flex-row text-2xl sm:text-3xl md:space-x-2">
                        <span>I'm a Backend Developer & </span>
                        <button data-popover-target="popover-user-profile" type="button" class="text-white focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-2xl sm:text-3xl text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 relative z-10">
                            Computer Science Student
                        </button>

                        <div data-popover id="popover-user-profile" role="tooltip" class="absolute z-10 inline-block w-96 text-sm transition-opacity duration-300 bg-white border border-gray-200 rounded-lg shadow-sm opacity-0 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 bottom-0">
                                <div class="p-3">
                                    <div class="flex items-center justify-between mb-2">
                                        <img class="w-16 h-14 rounded-full" src="/round photo.png" alt="Rizq Ramadhan">
                                    </div>
                                    <p class="text-base font-semibold leading-none text-black dark:text-white">
                                        Muhammad Rizq Ramadhan
                                    </p>
                                    <p class="mb-2 text-sm font-normal text-gray-500">
                                        <a href="#" class="hover:underline">@egrizq</a>
                                    </p>
                                    <span class="mb-1 text-neutral-600">
                                        5th semester Computer Science student at Universitas Dian Nusantara with 3.42 GPA, 
                                        I’m excited to share my journey and the portfolio I’m working on! 
                                    </span>
                                </div>
                            <div data-popper-arrow></div>
                        </div>
                        
                    </div>
                    <div class="flex flex-row text-2xl md:text-3xl space-x-2">
                        <span class="text-neutral-600">Based in</span>
                        <span >Jakarta,</span>
                        <span class="text-neutral-600">Indonesia</span>
                    </div>
                </div>

                <div class="flex flex-wrap justify-between pt-5 md:pt-10">
                    <div class="w-full sm:w-full lg:w-5/12 mb-4 sm:mb-0" data-aos="fade-up" data-aos-duration="1200" data-aos-anchor-placement="top-bottom">
                        <div class="sm:text-md md:text-lg">
                            <span class="text-neutral-600">Thrive on </span>
                            <span>building and optimizing</span>
                            <span class="text-neutral-600">
                                systems. Leveraging my expertise in analysis, programming, and problem-solving to build
                            </span> 
                            <span>impactful products.</span>                        
                        </div>                        
                    </div>
                    <div class="w-full sm:w-full md:pt-5 lg:pt-0 lg:w-5/12">
                        <div data-aos="fade-up" data-aos-duration="1200">
                            <span class="flex text-2xl pb-4">
                                Exprience
                            </span>
                            
                            <div class="flex flex-row justify-between">
                                <p>Calibration Specialist</p>
                                <p class="text-neutral-600">2021-2022</p>
                            </div>
                            <p class="text-neutral-600">PT. Suryaraya Rubberindo Industries</p>
                        </div>

                        <div class="flex-wrap pt-6 sm:pt-6 space-x-1" data-aos="fade-up" data-aos-duration="1600">
                            <span class="text-neutral-600 ">Connect with me on</span>
                            <span><a href="https://www.linkedin.com/in/muhammad-rizq-ramadhan-031a1a1ba/" 
                                class="hover:underline mr-1">LinkedIn</a></span>
                            <span class="text-neutral-600">and</span>
                            <span><a href="https://github.com/egrizq" 
                                class="hover:underline">GitHub!</a></span>
                            <span class="text-neutral-600">You can also find my latest article on</span>
                            <span><a href="https://medium.com/@rizq.ramadhan17" 
                                class="hover:underline">Medium!</a></span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </main>
</template>