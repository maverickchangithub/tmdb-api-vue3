import { reactive, readonly } from 'vue'
import { HomeIcon, VideoCameraIcon, TvIcon } from '@heroicons/vue/24/solid'
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
    
]
const defaultState = {
    tabs,
    currentTab: null,
}
const state = reactive(defaultState)
const actions = {    
    updateCurrentTab: (tab) => {       
        if (!actions.isActive(tab)) {
            state.currentTab = tab
        }
    },
    isActive: (tab) => {
        return state.currentTab.id === tab.id
    },
    init: () => {
        state.currentTab = state.tabs[0]
    }
}
const getters = {
    
}
actions.init()
export default () => ({
    state: readonly(state),
    ...actions,
    ...getters,
})