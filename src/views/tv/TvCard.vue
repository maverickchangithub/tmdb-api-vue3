<template>
    <div class="hover:ring-4 ring-pink-400 transition-all duration-200 relative group aspect-2x3 bg-neutral-700/30">
        <div>
            <image-loader :img-url="poster" aspect-ratio="2 / 3" />
        </div>
        <div class=" absolute inset-0 flex justify-center items-end p-5 text-center invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-gradient-to-t from-black via-transparent to-transparent transition duration-200 backdrop-blur-sm">
            {{ serie.name }}
        </div>
    </div>
</template>
<script setup>
    import { computed } from 'vue'
    import ImageLoader from '../helper/ImageLoader.vue'
    const props = defineProps({
        serie: {
            type: Object,
        }
    })
    const poster = computed(() => {
        const thumbUrl = import.meta.env.VITE_THUMBURL
        return thumbUrl + props.serie.poster_path
    })
</script>
<style scoped>
    
</style>