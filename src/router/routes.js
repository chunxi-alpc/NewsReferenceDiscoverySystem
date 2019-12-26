const blank = r => require.ensure([], () => r(require("../components/blank.vue")));
export const routes = [{
path: 'news',
name: 'news',
meta: { icon: 'cube', title: '新闻设置', menuId: 5 },
component: blank,
children: [{
        path: 'addNews',
        name: 'addNews',
        meta: { icon: 'cube', title: '添加新闻', menuId: 6 },
        component: r => require.ensure([], () => r(require("../pages/addNews.vue"))),
    },
    {
        path: 'newsList',
        name: 'newsList',
        meta: { icon: 'cube', title: '新闻列表', menuId: 7 },
        component: r => require.ensure([], () => r(require("../pages/newsList.vue"))),
    },

]
}] {
path: '*',
redirect: '/index/home'
}
];