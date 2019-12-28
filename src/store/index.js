import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations'
import { routes } from "../router/routes";

Vue.use(Vuex);

const state = {
    user: {
        msgCount: 0,
        username: '用户',
        menuId: '1,2,3'
    },
    app: {
        menuList: [],
        routers: routes
    }
};
export default new Vuex.Store({
    state,
    mutations
})
