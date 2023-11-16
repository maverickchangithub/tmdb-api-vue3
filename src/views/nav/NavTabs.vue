<template>
    <div class="chrome-tabs">
        <!-- <div class="chrome-tab" :class="isActive(tab) ? 'active' : ''" v-for="tab in tabState.tabs" :key="tab.id" @click="switchTab(tab)">
            <component :is="tab.icon" class="w-4 h-4" />
            <div class="text-sm">
                {{ tab.name }}
            </div>
            <div class="chrome-tab-divider"></div>
        </div> -->
        <div class="px-3 pt-1">
            <AppLogo class="w-6 h-6 text-neutral-400" />
        </div>
        <RouterLink :to="tab.route" class="chrome-tab" v-for="tab in tabs" :key="tab.id">
            <component :is="tab.icon" class="w-4 h-4" />
            <div class="text-sm">
                {{ tab.name }}
            </div>
            <div class="flex-1">

            </div>
            <div class="w-1 h-1 bg-sky-500 rounded-full">
                
            </div>
            <div class="chrome-tab-divider"></div>
        </RouterLink>
    </div>
</template>

<script setup>
    import { HomeIcon, VideoCameraIcon, TvIcon, DocumentTextIcon, PhotoIcon } from '@heroicons/vue/24/solid'
    import AppLogo from '../icons/logo.vue'
    const tabs = [
        {
            id: 1,
            name: 'Home',
            icon: HomeIcon,
            route: '/homepage'
        },
        {
            id: 2,
            name: 'TV Shows',
            icon: TvIcon,
            route: '/tv'
        },
        {
            id: 3,
            name: 'Movies',
            icon: VideoCameraIcon,
            route: '/movie'
        },
        {
            id: 4,
            name: 'Articles',
            icon: PhotoIcon,
            route: '/article'
        },
        {
            id: 5,
            name: 'Photos',
            icon: DocumentTextIcon,
            route: '/photo'
        },
    ]
</script>
<style scoped>
    .chrome-tabs {
        @apply px-3 pt-2 h-10 flex -space-x-px;
    }
    .chrome-tab {
        @apply bg-neutral-900 transition-all duration-200 rounded-t-md min-w-[10rem] relative select-none flex items-center px-3 space-x-2 text-neutral-400;
    }
    .chrome-tab.active {
        @apply bg-neutral-800 text-white z-50;
    }
    .chrome-tab::before,
    .chrome-tab::after {
        content: '';
        @apply w-5 h-5 absolute bottom-0 rounded-full transition-all duration-200;
        box-shadow: 0 0 0 50px #171717;
    }
    .chrome-tab::before {        
        @apply -left-5;
        clip-path: inset(50% -10px 0 50%);        
    }
    .chrome-tab::after {
        @apply -right-5;
        clip-path: inset(50% 50% 0 -10px);
    }
    .chrome-tab.active::before,
    .chrome-tab.active::after {
        @apply z-50;
        box-shadow: 0 0 0 50px #262626;
    }
    .chrome-tab:hover:not(.active) {
        @apply bg-neutral-700 z-20;
    }
    .chrome-tab:hover:not(.active)::before,
    .chrome-tab:hover:not(.active)::after {
        box-shadow: 0 0 0 50px #404040;
        @apply z-20;
    }

    .chrome-tab .chrome-tab-divider::before,
    .chrome-tab .chrome-tab-divider::after {
        content: '';
        @apply absolute w-px bg-neutral-600 top-2 bottom-2 opacity-100;
    }
    .chrome-tab .chrome-tab-divider::before {
        @apply -left-px;
    }
    .chrome-tab .chrome-tab-divider::after {
        @apply -right-px;
    }
    .chrome-tab.active .chrome-tab-divider::after,
    .chrome-tab.active .chrome-tab-divider::before,
    .chrome-tab:last-child .chrome-tab-divider::after,
    .chrome-tab:first-child .chrome-tab-divider::before,
    .chrome-tab:hover:not(.active) .chrome-tab-divider::before,
    .chrome-tab:hover:not(.active) .chrome-tab-divider::after {        
        @apply opacity-0;
    }
</style>