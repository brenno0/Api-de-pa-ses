import { action } from 'easy-peasy'
import withResetState from './withResetState'

const initialState = {
  loggedIn: false,
  favorites: null,
};

const store = {
  setLoggedIn: action((state, payload) => {
    state.loggedIn = payload;
  }),
  setFavorites: action((state, payload) => {
    state.favorites = payload;
  }),

};

export default withResetState(store, initialState);
