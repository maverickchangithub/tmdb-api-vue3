<template>
    <div class="w-full h-16 bg-neutral-900 sticky top-0 z-[9999]">
        <div class="h-10 flex items-center max-w-7xl w-full mx-auto text-neutral-100 space-x-1">            
            <NavTabs />
            <ThreeDots v-if="state.isLoading" />
        </div>
        <div class="w-full h-6 bg-neutral-800">

        </div>
    </div>
</template>

<script setup>
    import NavTabs from './NavTabs.vue'
    import ThreeDots from '../helper/ThreeDots.vue'
    import useTmdb from '../../models/useTmdb'
    const { state } = useTmdb()
</script>

<style scoped>
   
</style>