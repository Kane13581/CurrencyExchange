import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    currencyExc: {},
    newData: {},
    setDate: {},
    setBase: {},
  },
  getters: {
    currencyExc: (state) => {
      return state.currencyExc;
    },

    setBase: (state) => {
      return state.currencyExc.base;
    },
    newData: (state) => {
      return state.currencyExc.rates;
    },
    setDate: (state) => {
      return state.currencyExc.date;
    },
  },
  mutations: {
    setData(state, data) {
      state.currencyExc = data
    },
    delete_country: (state, name) => {
      let newdata = state.newData

      delete newdata.name;
      console.log(name);
    }

  },

  actions: {
    getData({ commit }) {
      axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=70f544d12fbd543b55192cad006147c9&base=EUR&symbols=EUR,USD,RUB,GBP,JPY,AUD')
        .then(res => commit('setData', res.data))
    },
    deleteCountry(context, name) {
      context.commit('delete_country', name)
    },


  },
  modules: {},
});
