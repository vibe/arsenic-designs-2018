import Vuex from 'vuex'
import appModule from './store/app';

const createStore = () => new Vuex.Store({
  modules: {
    app: appModule()
  }
})

export default createStore
