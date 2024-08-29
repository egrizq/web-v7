<script setup>
    const props = defineProps(['alt', 'width', 'imgLink'])
</script>

<template>
    <div class="pt-5 px-5">
        <img :src="props.imgLink"
            :alt="props.alt" :width="props.width" height="65" />
    </div>
</template>