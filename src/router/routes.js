const blank = r => require.ensure([], () => r(require("../components/blank.vue")));
export const routes = [{
        path: '/',
        redirect: '/news/addNews',
        component: r => require.ensure([], () => r(require("../components/main_frame.vue"))),
        children: [{
            path: 'news',
            name: 'news',
            meta: { icon: 'cube', title: '新闻', menuId: 1 },
            component: blank,
            children: [{
                    path: 'addNews',
                    name: 'addNews',
                    meta: { icon: 'cube', title: '添加新闻', menuId: 2 },
                    component: r => require.ensure([], () => r(require("../pages/addNews.vue"))),
                },
                {
                    path: 'newsList',
                    name: 'newsList',
                    meta: { icon: 'cube', title: '新闻列表', menuId: 3 },
                    component: r => require.ensure([], () => r(require("../pages/newsList.vue"))),
                },

            ]
        }]
    },
    {
        path: '*',
        redirect: '/index/home'
    }
];