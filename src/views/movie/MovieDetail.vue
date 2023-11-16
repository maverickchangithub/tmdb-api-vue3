<template>
    <div>
        <Suspense>
            <movie-loader />
        </Suspense>
    </div>
</template>
<script setup>
    import MovieLoader from './MovieLoader.vue'
</script>
<style  scoped>

</style>