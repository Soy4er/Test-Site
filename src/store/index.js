import Vue from 'vue';
import Vuex from 'vuex';
import menu from './modules/menu';
import catalog from './modules/catalog';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu,
    catalog,
  },
});
