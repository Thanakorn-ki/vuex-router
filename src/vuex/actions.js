export const incrementCounter = function ({ dispatch, state }) {
  dispatch('INCREMENT', 1)
}
export const addname = function ({ dispatch, state }, name) {
  console.log(name)
  dispatch('addname', name)
}
