<script setup>
    import { useAos } from './assets/useAos'; 
    import { onMounted } from 'vue'
    import { initFlowbite } from 'flowbite'

    import Link from './components/Link.vue'
    import Profile from './components/Profile.vue'
    import Footer from './components/Footer.vue'

    useAos();

    onMounted(() => {
        initFlowbite();
    })

</script>

<template>
    <main class="containter mx-auto py-5">
        <div class="flex justify-center">
            <div class="flex flex-col w-6/12 space-y-5">
                <Profile />
                <Link />
                <RouterView />
                <Footer />
            </div>
        </div>
    </main>
</template>