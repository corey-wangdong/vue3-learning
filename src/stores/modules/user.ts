import {defineStore} from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    token:''
  }),
  actions:{
    setToken(token:string) {
      this.token = token;
    }
  },
  persist: {
    enabled: true,
    strategies: [
      { storage: localStorage, paths: ['token'] },
    ]
  }
})