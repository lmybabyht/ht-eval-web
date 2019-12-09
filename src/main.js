import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import ViewUI from 'view-design'
import store from './store/index'

import 'view-design/dist/styles/iview.css';
import 'font-awesome/css/font-awesome.css';

Vue.use(ViewUI);
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
