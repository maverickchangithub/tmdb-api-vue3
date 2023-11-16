<template>
    <div class="w-full h-screen bg-neutral-800 overflow-hidden">
        <NavBar />
        <div class="h-full overflow-y-auto">
            <router-view />
            <FooterBlock />
        </div>
    </div>
</template>

<script setup>
    import NavBar from './nav/NavBar.vue'    
    import FooterBlock from './FooterBlock.vue'
</script>

<style scoped>

</style>