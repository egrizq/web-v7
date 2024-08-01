<script setup>
    import { reactive } from 'vue';
    
    const listJournal = reactive([  
        {
            title: "This is how you handle an API response!",
            link: "https://medium.com/@rizq.ramadhan17/handle-your-api-with-zod-types-5d8631351322",
            date: "Jul 31, 2024"
        },
        {
            title: "How programming shapes your mind!",
            link: "https://medium.com/@rizq.ramadhan17/how-programming-shapes-your-mind-57ce82ebb808",
            date: "Jul 01, 2024"
        },
        {
            title: "Apa itu kalibrasi?",
            link: "https://medium.com/@rizq.ramadhan17/apa-itu-kalibrasi-81020acc5e18",
            date: "Dec 11, 2023"
        },
        {
            title: "My reflection on data cleaning",
            link: "https://medium.com/@rizq.ramadhan17/my-reflection-on-data-cleaning-426cf592abb9",
            date: "Oct 18, 2023"
        },
        {
            title: "Are you fear?",
            link: "https://medium.com/@rizq.ramadhan17/are-you-fear-f1449f2f129a",
            date: "Jul 08, 2023"
        },
    ])

</script>

<template>
     <main class="ml-2"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="800">
        
        <div class="space-y-5 text-sm">
            <div v-for="(data, index) in listJournal" :key="index" >
                <div class="flex border-b pb-2 justify-between">
                        <a class="hover:text-blue-500" 
                        :href="data.link">
                        {{ data.title }}
                    </a>
                    <p class="text-zinc-600 italic">{{ data.date }}</p>                
                </div>
            </div>
        </div>
    </main>
</template>