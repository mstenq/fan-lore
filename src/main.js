import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'spectre.css/dist/spectre-icons.css'


//Amplify Setup
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import aws_exports from './aws-exports';
import { components } from 'aws-amplify-vue'
Amplify.configure(aws_exports)
Vue.use(AmplifyPlugin, AmplifyModules);


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
