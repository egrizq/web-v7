<script setup>
    const props = defineProps(['title', 'main', 'link', 'code'])
</script>

<template>
    <div class="border border-zinc-600 p-2 rounded-md flex-row hover:scale-105 ease-in-out duration-300">
        <img :src="props.code" class="py-2"
            alt="props.alt" width="25" height="auto" />
        
        <a :href="props.link" class="text-base hover:text-blue-500">
            <p>{{ props.title }}</p>
        </a>
        
        <p class="text-zinc-600 text-justify">{{ props.main }}</p>
    </div>
</template> 