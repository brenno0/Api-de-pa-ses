import { action } from 'easy-peasy'

const withSearchParams = (model = {}) => ({
  ...model,
  searchParams: model.searchParams || {},
  setSearchParams: action((state, payload) => {
    state.searchParams = { ...state.searchParams, ...payload }
  })
})

export default withSearchParams
