<template>
    <div class="h-[40rem]" :style="bannerStyle">
        <div class="bg-neutral-800/70 backdrop-blur-sm w-full h-full flex items-center justify-center">
            <div class="text-7xl font-black text-neutral-200">
                Home Page
            </div>
        </div>
    </div>
    <div class="max-w-7xl mx-auto text-neutral-200 py-5 space-y-5">
        <div class="text-3xl font-semibold text-neutral-300">
            Home
        </div>
        <div class="text-xl font-semibold">
            You may also wanna like ...
        </div>
        <div class="mt-5 grid grid-cols-4 gap-10">
            <div class="w-full aspect-[4/3] rounded bg-neutral-700 p-5 relative" v-for="n in 4">
                <div class="grid grid-cols-2 gap-3">                    
                    <ImageLoader class="rounded overflow-hidden" aspect-ratio="5 / 3" />
                    <ImageLoader class="rounded overflow-hidden" aspect-ratio="5 / 3" />
                </div>
                <div class="w-12 h-12 rounded-full overflow-hidden ring-4 ring-neutral-700 absolute top-16 left-0 right-0 mx-auto">
                    <ImageLoader class="w-12 h-12 rounded-full" aspect-ratio="1/1" :img-url="'https://api.lorem.space/image/face?w=150&h=150&hash=' + GenHashStrings()" mono />
                </div>
                <div class="mt-8 text-center font-semibold">
                    Jason Bourne
                    <div class="font-normal text-xs text-neutral-400/40">
                        @jason_bourne28
                    </div>
                </div>
                <div class="flex justify-center mt-5">
                    <button class="rounded bg-neutral-600/60 hover:bg-neutral-500 hover:text-white px-3 py-2 text-xs transition duration-200">
                        + Follow
                    </button>
                </div>
            </div>
        </div>
        <div class="h-px w-full bg-neutral-600 my-10"></div>
    </div>
</template>
<script setup>
    import ImageLoader from '../helper/ImageLoader.vue'
    import BannerImage from '../../assets/images/catface.jpg'
    const GenHashStrings = () => {
        return (Math.random() * 100000).toString(36).replace('.','').toUpperCase().substring(0,8)
    }
    const bannerStyle = {
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    }
</script>
<style scoped>

</style>