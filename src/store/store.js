import vuex from 'vuex'
import vue from 'vue'

vue.use(vuex)
export default new vuex.Store({
    state:{
        userInfo:{}
    },
    getters:{
        getUser(state){
            return state.userInfo;
        }
    },
    mutations:{
        setUserInfo(state,userInfo){
            state.userInfo=userInfo
        },
        removeUser(state){
            state.userInfo={};
        }
    },
    actions:{
        loginSucc({commit}){
            commit('setUserInfo');
        },
        loginOut({commit}){
            commit('removeUser');
        }
    }
})