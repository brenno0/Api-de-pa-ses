import  { action, createStore } from 'easy-peasy'

export const store = createStore({
    todos: ['favorite'],
    addTodo: action((state, payload) => {
      state.todos.push(payload);
    }),
    addFavorite: action((state, payload) => {
        state.todos.push(payload);
      }),
  });   