import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      token: null,
      email: ''
    },
    mutations: {
      authUser(state, userData) {
        state.email = userData.email;
        // state.token = userData.token;
      },
      setToken(state, token) {
        state.token = token;
      }
    },
    actions: {
      async signUp({commit}, authData) {
        await this.$axios.post('/account/register', {
          email: authData.email,
          password: authData.password
        }).then((res) => {
          if (res.status === 200) {
            commit('authUser', {
              email: authData.email
            });
            // this.$router.push('/activate-account');
          }
        }).catch(err => {
          console.log(err);
        })
      },
      async login({commit, dispatch}, authData) {
        await this.$axios.post('/account/login', {
          email: authData.email,
          password: authData.password
        }).then((res) => {
          console.log(res);
          commit('authUser', {
            email: authData.email,
          });
          commit('setToken', {token: true});
          // this.$router.push('/dashboard')
        }).catch(err => {
          console.log(err);
        })
      },

      async accountActivated({commit}, authData) {
        await this.$axios.post('/account/activate', {
          token: authData.token
        }).then((res) => {
          console.log(res);
          commit('authUser', {
            token: res.data.token
          });
          // commit('setToken', {token: res.data.idToken});
          // this.$router.push('/sign-in')
        }).catch(err => {
          console.log(err);
        })
      }
    },

    getters: {
      email(state) {
        return state.email;
      },
      isActivated(state) {
        return state.token != null;
      },
      isAuthenticated(state) {
        return state.token != null;
      }
    }
  });
};

export default createStore
