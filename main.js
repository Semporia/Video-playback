import Vue from 'vue'
import App from './App'



import profile from './pages/main/profile.vue'
Vue.component('profile',profile)

import home from './pages/main/home.vue'
Vue.component('home',home)

import shipin from './pages/main/shipin.vue'
Vue.component('shipin',shipin)

import discover from './pages/main/discover.vue'
Vue.component('discover',discover)

import notifications from './pages/main/notifications.vue'
Vue.component('notifications',notifications)

import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

 



