export default {
  UP_COUNTER: (state, payload) => {
    return {
      ...state,
      counter: state.counter + payload
    }
  },

  DOWN_COUNTER: (state, payload) => {
    return {
      ...state,
      counter: state.counter - payload
    }
  
  },

  RESET_COUNTER: (state, payload) => {
      return{
        ...state,
        counter: payload
      }
  }
}