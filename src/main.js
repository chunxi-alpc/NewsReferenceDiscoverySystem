import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iview from 'iview';
import "iview/dist/styles/iview.css";
Vue.use(iview);
import { getRemote } from './api/apidata';
Vue.prototype.apidata = getRemote;
Vue.config.productionTip = false;
import axios from 'axios'
Vue.prototype.$axios = axios
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
    store
})