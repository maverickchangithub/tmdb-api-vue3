<template>
    <Suspense>
        <template #default>                           
            <MovieNowplaying />
        </template>
        <template #fallback>
            <Skeleton />
        </template>
    </Suspense>        
</template>
<script setup>
    import MovieNowplaying from './MovieNowplaying.vue'
    import Skeleton from '../Skeleton.vue'
</script>
<style scoped>

</style>