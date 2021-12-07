import { createStore, persist } from 'easy-peasy'
import user from './user'


const model = {
  user,
}

export default createStore(persist(model))
