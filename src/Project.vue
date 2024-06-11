<script setup>
    import { reactive } from 'vue';
    import Project from './components/Project.vue'

    const listProject = reactive([
        {
            title: "Optimizing Data Preprocessing within a Seconds by Golang Goroutine's",
            main: "Data processing 16.000 data into PostgreSQL database within a seconds with Goroutine's",
            link: "https://github.com/egrizq/product-analysis-with-concurrency/blob/master/README.md"
        },
        {
            title: "CRUD API for Animal Grooming Services with TypeScript",
            main: "Building RESTful API for animal grooming services with TypeScript and Express.js. Leveraging JWT token for secure authentication and Zod with data validation.",
            link: "https://github.com/egrizq/animal-grooming/blob/master/README.md"
        },
        {
            title: "Exploring Bike Sharing System",
            main: "Data Analysis to find correlations between user behavior by season, weather, temperature, and hour to identify bike sharing patterns",
            link: "https://medium.com/@rizq.ramadhan17/bike-sharing-analysis-cc8f1c987b1e"
        },
        {
            title:"Building Text Summarization Using Hugging Face!",
            main:"Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa.",
            link:"https://github.com/egrizq/text_summarization",
        },
        {
            title:"Deploying a Model with Pizza or Pasta Recognition in Real Time",
            main:"Deploying a Convolutional Neural Networks (CNN) model with Flask to recognize pizza and pasta images in real-time on local development.",
            link:"https://github.com/egrizq/pizza_or_pasta/tree/master",
        },
        {
            title: "Sentiment Analysis for Batik Air Reviews",
            main: "Implemented web scraping to collect the reviews. Utilized the Vader Sentiment for in-depth sentiment analysis and visualization through Word Cloud",
            link: "https://github.com/egrizq/batik_air/blob/main/batik_air_reviews.ipynb",
        },
        {
            title: "Alphabet Recognition with CNN Model",
            main: "Developed a Convolutional Neural Networks (CNN) model to recognize lowercase alphabets with 85% accuracy rate.",
            link: "https://www.kaggle.com/code/rizqramadhan/german-alphabet-recognition",
        },
    ])

</script>

<template>
    <main class="ml-2"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="800">
        
        <div class="space-y-5 text-sm">
            <div v-for="(data, index) in listProject" :key="index">
                <Project 
                    :title="data.title"
                    :main="data.main"
                    :link="data.link"
                />
            </div>
        </div>
    </main>
</template>