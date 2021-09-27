import { createStore } from "vuex";
import axios from 'axios';

export default createStore({
  state: {
    currencyExc: {},
    symbols: {},
    newData: {},
    setDate: {},
    setBase: {},
  },
  getters: {
    currencyExc: (state) => {
      return state.currencyExc;
    },
    symbols: (state) => {
      return state.symbols.symbols;
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
    setData2(state, data) {
      state.symbols = data
    }
  },

  actions: {
    getData({commit}) {
      axios.get('http://api.exchangeratesapi.io/v1/latest?access_key=70f544d12fbd543b55192cad006147c9&base=EUR&symbols=EUR,USD,RUB,GBP,JPY,AUD')
      .then(res => commit('setData', res.data))
    },
    // getData2({commit}) {
    //   axios.get('http://api.exchangeratesapi.io/v1/symbols?access_key=70f544d12fbd543b55192cad006147c9&symbols=EUR,USD,RUB,GBP,JPY,AUD')
    //   .then(res => commit('setData2', res.data))
    // },

    // newEndPoint({commit}) {
    //   endpoint = 'latest',
    //   endpoint2 = 'symbols',
    //   access_key = '70f544d12fbd543b55192cad006147c9'

    //   axios({
    //     url: 'http://api.exchangeratesapi.io/v1/' + endpoint + '?access_key=' + access_key + '&symbols=EUR,USD,RUB,GBP,JPY,AUD'
        
    //   })
    // }
  },
  modules: {},
});
