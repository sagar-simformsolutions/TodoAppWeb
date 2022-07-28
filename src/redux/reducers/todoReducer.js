const INITIAL_STATE = {
  currentId: 0,
  todos: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: state.currentId + 1,
            text: action.payload.trim(),
            state: 'todo',
          },
        ],
        currentId: state.currentId + 1,
      };
    case 'TRASH_TODO':
      return {
        ...state,
        todos: state.todos?.filter(item => item?.id !== action.payload),
      };
    case 'CHANGE_TODO':
      return {
        ...state,
        todos: state.todos?.map(elements => {
          if (elements.id === action.payload) {
            return {
              ...elements,
              state: elements?.state === 'done' ? 'todo' : 'done',
            };
          }
          return elements;
        }),
      };

    default:
      return state;
  }
};

export default reducer;
