<script setup>
    const props = defineProps(['title', 'main', 'link'])
</script>

<template>
    <div class="border border-zinc-600 p-2 rounded-md">
        <a :href="props.link" class="pb-2 text-base hover:text-blue-500">
            {{ props.title }}
        </a>
        <p class="text-zinc-600 text-justify">{{ props.main }}</p>
    </div>
</template>