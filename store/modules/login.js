import * as types from '@/store/types.js';


const state = () => (
    { isLogin: true }
)

const getters = {

    getIsLogin: state => state.isLogin,

}

const mutations = {
    [types.CHANGEISLOGIN](state, params) {
        state.isLogin = params;
    }
}

const actions = {
    changeIsLogin: ({ commit }, params) => {
        commit(types.CHANGEISLOGIN, params)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}