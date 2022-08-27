import { useReducer } from "react"
import countReducer from "./count.reducer"
import CountContext from "./count.context"
import { UP_COUNTER, DOWN_COUNTER, RESET_COUNTER } from "../types"


const CountState = ({ children }) => {

  const initialState = {
    counter: 0,
    interval: 1,
    resetCounter: 0
    
  }

  const [state, dispatch] = useReducer(countReducer,initialState)

  const increment = () => {
    dispatch({ type: UP_COUNTER, payload: state.interval})
  }

  const decrement = () => {
    dispatch({ type: DOWN_COUNTER, payload: state.interval})
  }

  const reset = () => {
    dispatch({ type: RESET_COUNTER, payload: 0})
  }

  // const setinterval () => {

  // }



  const value = {
    counter: state.counter,
    interval: state.interval,
    resetCounter: state.resetCounter,
    increment,
    decrement,
    reset
  }

  return (
    <CountContext.Provider value={value}>
      { children }
    </CountContext.Provider>
  )

}

export default CountState