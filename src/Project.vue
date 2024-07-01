<script setup>
    import { reactive } from 'vue';
    import Project from './components/Project.vue'

    const listProject = reactive([
        {
            title: "Optimizing Data Preprocessing within a Seconds by Golang Goroutine's",
            main: "Data processing 16.000 data into PostgreSQL database within a seconds with Goroutine's",
            link: "https://github.com/egrizq/product-analysis-with-concurrency/blob/master/README.md",
            codes: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
            ]
        },
        {
            title: "REST API for Animal Grooming Services with TypeScript",
            main: "Building RESTful API for animal grooming services with TypeScript and Express.js. Leveraging JWT token for secure authentication and Zod with data validation.",
            link: "https://github.com/egrizq/animal-grooming/blob/master/README.md",
            codes: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg",
                "/prisma.svg"
            ]
        },
        {
            title: "Analysis Bike Sharing System",
            main: "Data Analysis to find correlations between user behavior by season, weather, temperature, and hour to identify bike sharing patterns",
            link: "https://medium.com/@rizq.ramadhan17/bike-sharing-analysis-cc8f1c987b1e",
            codes: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg", 
                "/pandas.svg",
                "seaborn.svg"
            ]
        },
        {
            title:"Build Text Summarization Using Hugging Face model!",
            main:"Sharing ideas and building text summarization using Transformers from Hugging Face to understand English long text into a concise conclusion Bahasa.",
            link:"https://github.com/egrizq/text_summarization",
            codes: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                "/flask.svg",
                "/hugging-face.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png",
            ]   
        },
        {
            title:"Deploying a Model with Pizza or Pasta Recognition in Real Time",
            main:"Deploying a Convolutional Neural Networks (CNN) model with Flask to recognize pizza and pasta images in real-time on local development.",
            link:"https://github.com/egrizq/pizza_or_pasta/tree/master",
            codes: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                "/numpy.svg",
                "flask.svg",
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
                "https://user-images.githubusercontent.com/25181517/183898054-b3d693d4-dafb-4808-a509-bab54cf5de34.png"
            ]
        },
        {
            title: "Sentiment Analysis for Batik Air Reviews",
            main: "Implemented web scraping to collect the reviews. Utilized the Vader Sentiment for in-depth sentiment analysis and visualization through Word Cloud",
            link: "https://github.com/egrizq/batik_air/blob/main/batik_air_reviews.ipynb",
            codes: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                "/pandas.svg",
                "seaborn.svg"
            ]
        },
        {
            title: "Alphabet Recognition with CNN Model",
            main: "Developed a Convolutional Neural Networks (CNN) model to recognize lowercase alphabets with 85% accuracy rate.",
            link: "https://www.kaggle.com/link/rizqramadhan/german-alphabet-recognition",
            codes: [
                "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
                "/numpy.svg"
            ]
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
                    :codes="data.codes"
                />
            </div>
        </div>
    </main>
</template>