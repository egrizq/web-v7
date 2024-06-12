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

    <div class="flex flex-row space-x-1">
        <div class="text-zinc-600 w-full">
            <ul class="ml-5 space-y-2">
                <li v-for="(data, index) in listEducation" :key="index" class="list-disc">
                    <div class="flex flex-row justify-between">
                        <p class="text-black text-base">{{ data.title }}</p>
                        <p>{{ data.years }}</p>
                    </div>
                    <p>{{ data.place }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>