import uuid from 'uuid';

export default function manageTodo(state = { todos: [] }, { type, payload }) {
  switch (type) {

    case 'ADD_TODO':
      const todo = {
        id: uuid(),
        text: payload.text
      }
      return { todos: state.todos.concat(todo) };

    case 'DELETE_TODO':
      return { todos: state.todos.filter(todo => todo.id !== payload.id) }     
      
    default:
      return state;
  }
}
