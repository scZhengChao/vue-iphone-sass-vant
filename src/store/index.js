import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import models from './models'

import getters from './getters'

export default new Vuex.Store({
    modules:{
        ...models
    },
    getters,
    strict: process.env.NODE_ENV !== 'production'
})