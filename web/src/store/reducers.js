// const todosInit = [
//   { id: 1, value: "Wash the cat", done: false },
//   { id: 2, value: "Learn JS", done: false },
//   { id: 3, value: "Watch a movie", done: false },
//   { id: 4, value: "Eat healthy", done: false },
// ];

// const initialState = {
//   todos: todosInit,
// };

// export const reducers = (state = initialState, action) => {
//   switch (action.type) {
//     case "DONE_TODO":
//       const newTodosState = state.todos.map((todo) => {
//         if (todo.id === action.payload.id) return { ...todo, done: !todo.done };
//         return todo;
//       });
//       return { ...state, todos: newTodosState };

//     case "DELETE_TODO":
//       const newTodosState2 = state.todos.filter(
//         (todo) => todo.id !== action.payload.id
//       );
//       return { ...state, todos: newTodosState2 };

//     case "ADD_TODO":
//       const newTodosState3 = state.todos.concat([
//         {
//           id: state.todos.length + 1,
//           value: action.payload.text,
//           done: false,
//         },
//       ]);

//       return { ...state, todos: newTodosState3 };

//     case "EDIT_TODO":
//       console.log(action.payload.id)
//       console.log(action.payload.text)
      
//       const newTodosState4 = state.todos.map((todo) => {
//         if (todo.id === action.payload.id) {
//           todo.value = action.payload.text;
//         }
//         return todo;
//       });

//       return { ...state, todos: newTodosState4 };

//     default:
//       return state;
//   }
// };
