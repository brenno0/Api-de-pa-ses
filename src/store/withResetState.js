import { action } from 'easy-peasy'

const withResetState = (model, initialState) => ({
  ...model,
  ...initialState,
  reset: action(() => ({ ...initialState }))
})

export default withResetState
