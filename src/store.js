import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from './router'
Vue.use(Vuex)
const API = 'https://images-api.nasa.gov/search?q='
export default new Vuex.Store({
  state: {
    search: '',
    result: [],
    openModal: false,
    searchError: false,
    currentElement: [],
    loading: false
  },
  mutations: {
    setSearch(state, value){
      state.search = value;
    },
    setData(state, response){
      state.result.push(response);
    },
    setTag(state, value){
      state.search = value;
    },
    openModal(state, data){
      state.currentElement = data;
      state.openModal = !state.openModal;
    },
    closeModal(state){
      state.currentElement = [];
      state.openModal = false;
    }
  },
  actions: {
    async getData({ commit, state }){
      state.loading = true;
      state.result = [];
      axios.get(`${API}${state.search}&media_type=image`)
      .then(function(response){
        const output = response.data.collection.items;
        router.replace('searchResult');
        if(output.length > 0){
          state.searchError = false;
          output.forEach(item=>{
            commit('setData', item)
          })
        }
        else{
          state.search = '';
          state.searchError = true;
        }
      })
      .catch(function(error){
        // eslint-disable-next-line
        console.log(error)
      })
      .finally(function(){
        state.loading = false;
        // if(router.history.current.path === '/' && state.result.length > 0){
        //   router.replace('searchResult');
        // }
      })
    },
    setTag({commit}, value){
      commit('setTag', value);
    },
    openModal({commit}, data){
      commit('openModal', data);
    },
    closeModal({commit}){
      commit('closeModal');
    }
  },
  getters:{
    search(state){
      return state.search;
    },
    cosmoData(state){
      return state.result;
    },
    openModal(state){
      return state.openModal;
    },
    currentElement(state){
      return state.currentElement;
    },
    searchError(state){
      return state.searchError;
    },
    loading(state){
      return state.loading;
    }
  }
})
