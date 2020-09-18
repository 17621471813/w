import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);


const state = {
    name: 'wang',
    index: null
}

const store = new Vuex.Store({
    state
});

export default store;