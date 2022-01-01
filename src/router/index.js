import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/characters"),
    },
    {
        path: "/comics",
        name: "Comics",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/comics"),
    },
    {
        path: "/characters",
        name: "Characters",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/characters"),
    },
    {
        path: "/comics/:id",
        name: "comic",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Comic" */ "../views/comics/Comic.vue"),
        children: [{
                path: 'characters',
                name: 'ComicCharacters',
                component: () =>
                    import ( /* webpackChunkName: "Comic Characters" */ '../views/comics/characters.vue')
            },
            {
                path: 'creators',
                name: 'ComicCreators',
                component: () =>
                    import ( /* webpackChunkName: "Comic Creators" */ '../views/comics/creators.vue')
            },
            {
                path: 'events',
                name: 'ComicEvents',
                component: () =>
                    import ( /* webpackChunkName: "Comic Series" */ '../views/comics/events.vue')
            },
            {
                path: 'stories',
                name: 'ComicStories',
                component: () =>
                    import ( /* webpackChunkName: "Comic Stories" */ '../views/comics/stories.vue')
            }
        ]
    }, {
        path: "/characters/:id",
        name: "character",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Character" */ "../views/characters/Character.vue"),
        children: [{
                path: 'comics',
                name: 'CharacterComics',
                component: () =>
                    import ( /* webpackChunkName: "Character Comics" */ '../views/characters/comics.vue')
            },
            {
                path: 'events',
                name: 'CharacterEvents',
                component: () =>
                    import ( /* webpackChunkName: "Character Events" */ '../views/characters/events.vue')
            },
            {
                path: 'series',
                name: 'CharacterSeries',
                component: () =>
                    import ( /* webpackChunkName: "Character Series" */ '../views/characters/series.vue')
            },
            {
                path: 'stories',
                name: 'CharacterStories',
                component: () =>
                    import ( /* webpackChunkName: "Character Stories" */ '../views/characters/stories.vue')
            }
        ],

    },
    {
        path: "/events/:id",
        name: "event",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Event" */ "../components/Event.vue"),
    },
    {
        path: "/events",
        name: "Events",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/events/index.vue"),
    },
    {
        path: "/creators",
        name: "Creators",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/creators"),
    },
    {
        path: "/stories",
        name: "Stories",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/stories"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;