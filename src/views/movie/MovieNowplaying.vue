<template>
    <div class="w-full max-w-7xl mx-auto text-neutral-100 pb-20 pt-10">        
        <div class="flex items-center justify-center space-x-3">
            <div v-for="category in categories" :key="category.id">
                <div class="px-5 py-2 text-sm hover:bg-neutral-600/30 cursor-pointer rounded transition duration-200" :class="query.category === category.category ? 'bg-neutral-500/40' : ''" @click="updateCategory(category.category)">
                    {{ category.name }}
                </div>
            </div>
        </div>
        <div class="flex flex-wrap mt-10 -mx-5">
            <div v-for="movie in state.movies" :key="movie.id" class="w-1/5 px-5 mb-10">
                <router-link :to="'/movie/' + movie.id">
                    <movie-card :movie="movie" />
                </router-link>
            </div>
        </div>        
        <div class="w-full h-10 rounded overflow-hidden text-neutral-300 bg-neutral-700/70 cursor-pointer hover:text-white hover:bg-neutral-700/40 transition duration-200">
            <div class="w-full h-full grid place-content-center text-sm" v-if="!state.isLoading" @click.once="loadMore()">
                Load More...
            </div>
            <div class="h-full grid place-content-center" v-else>
                <ThreeDots />
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { reactive } from 'vue'
    import useTmdb from '../../models/useTmdb'
    import MovieCard from './MovieCard.vue'
    import ThreeDots from '../helper/ThreeDots.vue'
    const { state, getMovies } = useTmdb()
    const query = reactive({
        page: 1,
        category: 'now_playing'
    })
    const categories = [
        {
            id: 1,
            name: 'Now Playing',
            category: 'now_playing'
        },
        {
            id: 2,
            name: 'Popular',
            category: 'popular'
        },
        {
            id: 3,
            name: 'Upcoming',
            category: 'upcoming'
        },
        {
            id: 4,
            name: 'Top Rated',
            category: 'top_rated'
        },
    ]
    const updateCategory = async (category) => {
        if (query.category === category) { 
            return
         } else {
             query.category = category
             query.page = 1
             await getMovies (query)
         }
    }
    const loadMore = async () => {
        query.page ++
        await new Promise(resolve => setTimeout(resolve, 500))
        await getMovies(query)
    }
    await new Promise(resolve => setTimeout(resolve, 1500))
    await getMovies (query)
</script>

<style scoped>

</style>