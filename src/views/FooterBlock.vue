<template>
    <div class="w-full bg-neutral-700/50 h-auto pb-20">
        <div class="max-w-7xl mx-auto py-10 text-neutral-200">
            <div class="grid grid-cols-4 gap-10">
                <div class="rounded bg-neutral-600/60 w-full aspect-[2/1]" v-for="n in 4">

                </div>
            </div>
            <div class="h-px w-full bg-neutral-600 my-10"></div>
            <div class="space-y-10">
                <div class="text-2xl text-center font-semibold text-neutral-200 capitalize">
                    What people are saying 
                </div>
                <div class="max-w-sm mx-auto bg-neutral-600/50 rounded p-5">
                    <div class="text-center space-y-5">
                        <div class="w-16 h-16 rounded-full overflow-hidden ring-4 ring-neutral-100 mx-auto">
                            <ImageLoader class="w-16 h-16 rounded-full" :aspect-ratio="'1/1'" :img-url="'https://api.lorem.space/image/face?w=150&h=150'" mono />
                        </div>
                        <div class="text-lg text-neutral-200 font-semibold">
                            Catherine Hill
                            <div class="text-xs text-neutral-400 font-normal">
                                CEO of Grand Hills Co.Ltd.
                            </div>
                        </div>
                        <div class="px-5 text-sm text-neutral-300 font-medium">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iure, id cumque mollitia officiis assumenda iusto voluptatem consectetur?                        
                        </div>
                        <div class="flex items-center justify-center space-x-2">
                            <StarIcon class="w-4 h-4" v-for="n in 5" />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import ImageLoader from './helper/ImageLoader.vue'
    import { StarIcon } from '@heroicons/vue/24/solid'
</script>
<style scoped>

</style>