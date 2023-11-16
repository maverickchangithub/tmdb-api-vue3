<template>
    <div class="w-full aspect-ratio bg-neutral-600/30 relative">
        <img :src="imgUrl ?? 'https://picsum.photos/800/800?random=' + imageseed" alt="" :class="mono ? 'grayscale' : ''" @load="onLoaded()" v-show="isLoaded" class="object-cover aspect-ratio z-20" :id="'image' + imageseed">
        <div class="inset-0 absolute flex items-center justify-center z-0" v-if="!isLoaded">
            <PhotoIcon class="w-6 h-6 text-neutral-600/60" />
        </div>
    </div>
</template>

<script setup>
    import { computed, ref } from 'vue'
    import { PhotoIcon  } from '@heroicons/vue/24/solid'
    const props = defineProps({
        imgUrl: {
            type: String,
        },
        aspectRatio: {
            type: String
        },
        mono: {
            type: Boolean,
            default: false,
        }
    })
    const isLoaded = ref(false)
    const imageseed = computed(() => {
        return Math.ceil(Math.random() * 2000)
    })
    const onLoaded = () => {
        isLoaded.value = true
        gsap.from('#image' + imageseed.value,{
            opacity: 0,
            duration: .3,
            scale: .99,
            blur: 1,
        })
    }
</script>
<style scoped>
    .aspect-ratio {
        aspect-ratio: v-bind(aspectRatio);
    }
</style>