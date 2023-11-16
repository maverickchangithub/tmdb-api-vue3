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
            <div v-for="serie in state.series" :key="serie.id" class="w-1/5 px-5 mb-10">
                <router-link :to="'/tv/' + serie.id">
                    <tv-card :serie="serie" />
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
    import TvCard from './TvCard.vue'
    import ThreeDots from '../helper/ThreeDots.vue'
    
    const { state, getSeries } = useTmdb()
    const query = reactive({
        page: 1,
        category: 'airing_today'
    })
    const categories = [        
        {
            id: 1,
            name: 'Airing TODAY!',
            category: 'airing_today'
        },
        {
            id: 2,
            name: 'On The Air',
            category: 'on_the_air'
        },
        {
            id: 3,
            name: 'Popular',
            category: 'popular'
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
             await getSeries (query)
         }
    }
    const loadMore = async () => {
        query.page ++
        await new Promise(resolve => setTimeout(resolve, 500))
        await getSeries(query)
    }
    await new Promise(resolve => setTimeout(resolve, 1500))
    await getSeries (query)

</script>

<style scoped>

</style>