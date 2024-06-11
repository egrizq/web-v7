<script setup>
    const props = defineProps(['title', 'main', 'link'])
</script>

<template>
    <div class="border border-zinc-600 p-2 rounded-md flex-row hover:scale-105 ease-in-out duration-300">
        <a :href="props.link" class="text-base hover:text-blue-500">
            {{ props.title }}
        </a>
        
        <p class="text-zinc-600 text-justify">{{ props.main }}</p>
    </div>
</template> 