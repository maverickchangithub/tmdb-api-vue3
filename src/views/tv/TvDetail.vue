<template>
    <div>
        <keep-alive>
            <Suspense>
                <tv-loader />
            </Suspense>
        </keep-alive>
    </div>
</template>
<script setup>
    import TvLoader from './TvLoader.vue'
</script>
<style scoped>

</style>