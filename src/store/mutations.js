import state from './state'
export default {
    handleTestMutations(state, data) {

        state.handleTestMutations = data
    },

      handleChangeCollapseFlag(state, data) {
        state.collapse = !state.collapse
      }
}