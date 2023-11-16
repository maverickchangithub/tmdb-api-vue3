import { createRouter, createWebHistory } from "vue-router"
const routes = [
    {
        path: '/',
        component: () => import('./views/Home.vue'),
        children: [
            {
                path: '',
                redirect: '/homepage'
            },
            {
                path: '/homepage',
                component: () => import('./views/homepage/Homepage.vue'),
            },
            {
                path: '/tv',
                children: [
                    {
                        path: '',
                        redirect: '/tv/home'
                    },
                    {
                        path: '/tv/home',
                        component: () => import('./views/tv/Tvshows.vue'),
                    },
                    {
                        path: '/tv/:id',
                        component: () => import('./views/tv/TvDetail.vue')
                    },
                ]
            },
            {
                path: '/movie',
                component: () => import('./views/movie/MovieHome.vue'),
                children: [
                    {
                        path: '',
                        redirect: '/movie/home',
                    },
                    {
                        path: '/movie/home',
                        component: () => import('./views/movie/Movies.vue'),
                    },
                    {
                        path: '/movie/:id',
                        component: () => import('./views/movie/MovieDetail.vue')
                    },
                ]
            },
            {
                path: '/article',
                component: () => import('./views/article/ArticleHome.vue'),
                children: [
                    {
                        path: '',
                        redirect: '/article/home',
                    },
                    {
                        path: '/article/home',
                        component: () => import('./views/article/Articles.vue'),
                    },
                    // {
                    //     path: '/movie/:id',
                    //     component: () => import('./views/movie/MovieDetail.vue')
                    // },
                ]
            },
            {
                path: '/photo',
                component: () => import('./views/photo/PhotoHome.vue'),
                children: [
                    {
                        path: '',
                        redirect: '/photo/home',
                    },
                    {
                        path: '/photo/home',
                        component: () => import('./views/photo/Photos.vue'),
                    },
                    // {
                    //     path: '/movie/:id',
                    //     component: () => import('./views/movie/MovieDetail.vue')
                    // },
                ]
            }            
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        component: () => import('./views/Notfound.vue')
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'active',
})

export default router