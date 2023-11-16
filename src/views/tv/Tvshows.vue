<template>
    <div>
        <Suspense>
            <template #default>
                <TvPopular />
            </template>
            <template #fallback>
                <div>
                    <Skeleton />
                </div>
            </template>
        </Suspense>
    </div>
</template>

<script setup>
    import TvPopular from './TvPopular.vue'
    import Skeleton from '../Skeleton.vue'
</script>

<style scoped>

</style>