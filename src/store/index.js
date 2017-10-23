import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  userPhone: ''
}

const mutations = {
  saveAdminInfo (state, phone) {
    state.userPhone = phone;
  }
}

export default new Vuex.Store({
  state,
  mutations,
})
