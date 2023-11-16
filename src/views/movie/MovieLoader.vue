<template>
    <div class="w-full h-full text-neutral-100">
        <div class="w-full relative h-[560px]">
            <div class="max-w-7xl inset-0 mx-auto flex items-center space-x-10 h-full absolute z-40">
                <div class="w-1/4 flex-shrink-0 relative group transition-all duration-200">
                    <div>
                        <image-loader :img-url="poster" aspect-ratio="2 / 3" />
                    </div>
                    <div class="absolute inset-0 bg-black/70 invisible opacity-0 group-hover:opacity-100 group-hover:visible backdrop-blur transiton duration-200 flex items-center justify-center text-xl select-none">
                        Expand
                    </div>
                </div>
                <div class="flex-1 flex-shrink-0">
                    <div class="text-4xl font-semibold text-white tracking-wide border-b border-neutral-500 pb-3">
                        {{ state.movieDetail.original_title  }}
                        <span class="text-neutral-200 font-light">
                            ({{ moment(state.movieDetail.release_date).format('YYYY') }})
                        </span>
                        <span class="text-lg font-normal">
                            {{ state.movieDetail.status }}
                        </span>
                    </div>
                    <div class="flex my-3 items-end space-x-5">
                        <div class="text-3xl font-light">
                            {{ state.movieDetail.title  }}
                        </div>
                        <div class="text-neutral-400" v-for="country in state.movieDetail.production_countries" :key="country.name">
                            {{ country.name }}
                        </div>
                    </div>
                    <div class="flex text-sm mt-5 divide-x -mx-2">
                        <div v-for="genre in state.movieDetail.genres" :key="genre.id" class="px-2">
                            {{ genre.name }}
                        </div>
                    </div>
                    
                    <div class="flex my-5">
                        <div class="w-16 h-16 rounded-full grid place-content-center bg-neutral-800/20 font-semibold text-lg relative">
                            <div class="inset-0 absolute grid place-content-center">
                                {{ state.movieDetail.vote_average ? state.movieDetail.vote_average.toFixed(1) : 0.0 }}
                            </div>
                            <svg viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-16 h-16">
                                <circle cx="12" cy="12" r="10" class="text-green-700/50"></circle>
                                <circle :stroke-dasharray="(state.movieDetail.vote_average / 10 * 62.83185) + ',62.83185'" cx="12" cy="12" r="10" class="text-green-400 voteRing"></circle>
                            </svg>
                        </div>
                    </div>
                    <div class="my-3 text-xl text-neutral-300 italic">
                        {{ state.movieDetail.tagline }}
                    </div>
                    <div class="my-3">
                        <div class="text-2xl mb-2">
                            Overview
                        </div>
                        <div class="text-sm pr-40">
                            {{ state.movieDetail.overview  }}
                        </div>
                    </div>
                </div>
            </div>
            <div class=" absolute inset-0 overflow-hidden object-cover opacity-20 z-0">
                <image-loader :img-url="backdropPath" />
            </div>
        </div>
        <div class="max-w-7xl w-full mx-auto pt-10 pb-20">
            <div class="my-5 flex flex-wrap -mx-5">
                <div v-for="season in state.movieDetail.seasons" :key="season.id" class="w-1/6 mb-10 px-5">
                    <div class="bg-neutral-700/30 relative group">
                        <image-loader :img-url="thumbUrl + season.poster_path" aspect-ratio="2 / 3" /> 
                        <div class="absolute inset-0 bg-black/60 invisible opacity-0 group-hover:opacity-100 group-hover:visible backdrop-blur-sm transiton duration-200 flex items-center justify-center text-sm">
                            {{ season.name }}
                        </div>
                        <div class="absolute right-0 top-0 p-1 w-6 h-6 bg-blue-500 grid place-content-center text-xs font-bold">
                            {{ season.episode_count }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap">
                <div class="mb-3 px-1" v-for="keyword in state.movieDetail.keywords.keywords" :key="keyword.id">
                    <div class="px-3 py-1 border border-neutral-600 text-neutral-300 bg-neutral-500/20 text-xs capitalize rounded-full">
                        {{ keyword.name }}
                    </div>
                </div>
            </div>
            <div class="flex flex-wrap -mx-3 mt-10">
                <div class="w-1/12 px-3 mb-6" v-for="cast in state.movieDetail.credits.cast" :key="cast.id">
                    <div >
                        <image-loader :img-url="thumbUrl + cast.profile_path" aspect-ratio="2 / 3" />
                        <div class="text-xs text-center p-2">
                            {{ cast.original_name }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="h-px bg-neutral-600 my-10">

            </div>
            <div class="flex flex-wrap -mx-3">
                <div class="w-1/5 px-3 mb-6" v-for="image in state.movieDetail.images.posters" :key="image.id">
                    <image-loader :img-url="thumbUrl + image.file_path" aspect-ratio="2 / 3" />
                </div>
            </div>
            <div class="my-40">

            </div>
            <div v-for="(detail, key) in state.movieDetail" :key="detail" class="text-neutral-400">
                {{ key }} : {{ detail }}
            </div>
        </div>
    </div>
</template>

<script setup>
    import { computed } from 'vue'
    import useTmdb from '../../models/useTmdb'
    import ImageLoader from '../helper/ImageLoader.vue'
    import { useRoute } from 'vue-router'
    import moment from 'moment'
    const route = useRoute()
    const { state, getMovieDetail } = useTmdb()
    const imageUrl = import.meta.env.VITE_IMAGEURL
    const thumbUrl = import.meta.env.VITE_THUMBURL
    const backdropPath = computed(() => {
        return imageUrl + state.movieDetail.backdrop_path
    })
    const poster = computed(() => {
        return imageUrl + state.movieDetail.poster_path
    })
    await getMovieDetail(route.params.id)
</script>

<style lang="scss" scoped>

</style>