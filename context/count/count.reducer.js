import countReducerOptions from "./count.reducer.options"

export default (state, action) => {
  const { payload, type} = action
  const updateState = countReducerOptions[type](state, payload)
  if (!updateState) return state
  return {
    ...updateState
  }
}