import {createStore} from 'vuex'

const store = createStore({
  state: () => ({
   counter:100,
   name:"coderwhy",
   level:100,
   avatarUrl: "https://xxx",
  //  users: [
  //   {id: 111, name: "why", age: 18},
  //   {id: 112, name: "kobe", age: 20},
  //   {id: 113, name: "james", age: 30},
  //  ]
  }),

  getters:{
   doubleCounter(state) {
    return state.counter * 2
   }, 
   
  //  totalAge(state) {
  //   return state.users.reduce((preValue, item) => {
  //     return preValue + item.age
  //   },0)
  // },
  },
  
  mutations: {
    increment(state) {
      state.counter++
    }
  }

})

export default store