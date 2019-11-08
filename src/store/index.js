import Vue from 'vue'
import Vuex from 'vuex'
import {request} from 'network/request'

Vue.use(Vuex)

const store = new Vuex.Store({
  state:{
    currentUser: {
      get voteCode() {
        return localStorage.getItem("voteCode");
      },
      get UserToken() {
        return localStorage.getItem("user_token");
      }
    },
    /*判断登录状态*/
    ifLogin: false
  },
  mutations:{
    setLoginTrue(state) {
      state.ifLogin = true;
    },
    setLoginFalse(state) {
      state.ifLogin = false;
    },
    setUser(state, { voteCode, user_token}) {
      // 在这里把用户名和token保存起来
      localStorage.setItem("voteCode", voteCode);
      localStorage.setItem("user_token", user_token);
    },
    clearUser(state) {
      localStorage.clear();
    }
  },
  actions:{
    userLogin(context, { voteCode, router }) {
      request({
        method: "post",
        url: "/login",
        params: {
          voteCode: voteCode
        }
      }).then(res => {
        context.commit("setUser",{
          voteCode: voteCode,
          user_token: res.body.token,
        })
        router.push({ path: "/mainPage" });
        context.commit("setLoginTrue")
      }).catch(err => {

      })
     
    },
    loginOUt(context, { router }) {
      request({
        method: "post",
        url: "/loginOut",
        params: {
          voteCode: this.state.currentUser.voteCode
        }
      }).then(res => {
        router.push({ path: "/" });
        context.commit("clearUser");
      })
    }
  },
  getters:{
    // getSign: state => {
    //   return state.ifSign;
    // },
  },
  modules:{

  }
})

export default store
