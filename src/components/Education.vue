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
        <div class="text-zinc-600 w-full">
            <div class="flex justify-between ml-2">
                <div class="flex flex-row space-x-2 w-9/12">
                    <div class="">
                        <img 
                            height="32" width="32" 
                            src="/kampus.png" alt="logo undira" 
                            class="rounded-lg"
                        >
                    </div>
                    <div class="w-full">
                        <p class="text-black text-base">Computer Science</p>
                        <p>Universitas Dian Nusantara</p>
                    </div>
                </div>

                <p>2022-Present</p>
            </div>

            <div class="flex justify-between ml-2 pt-4">
                <div class="flex flex-row space-x-2 w-9/12">
                    <div class="">
                        <img 
                            height="35" width="35" 
                            src="/dicoding.jpeg" alt="logo dicoding" 
                            class="rounded-lg"
                        >
                    </div>
                    <div class="w-full">
                        <p class="text-black text-base">Data Science</p>
                        <p>IDCamp 2023 X Dicoding</p>
                    </div>
                </div>

                <p>2023-2024</p>
            </div>
        </div>
    </div>
</template>