import Vue from 'vue'
import Router from 'vue-router'
import Vuex from 'vuex'

import routes from './routes'
import App from './App.vue'
import createStore from './store';



Vue.use(Router)
Vue.use(Vuex)

const createRouter = () => new Router({
  mode: 'history',
  routes
})

export default { App, createRouter, createStore }
