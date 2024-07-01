<script setup>
    const props = defineProps(['title', 'main', 'link', 'codes'])
</script>

<template>
    <div class="border border-zinc-200 p-2 rounded-md flex-row hover:scale-105 ease-in-out duration-300">
        <div class="flex flex-row space-x-2">
            <div v-for="(data, index) in props.codes" :key="index" >
                <img :src="data" class="py-2"
                alt="props.alt" width="25" height="auto" />
            </div>
        </div>
        
        <a :href="props.link" class="text-base hover:text-blue-500">
            <p>{{ props.title }}</p>
        </a>
        
        <p class="text-zinc-600 text-justify">{{ props.main }}</p>
    </div>
</template> 