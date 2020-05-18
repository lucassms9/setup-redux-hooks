const INIT_STATE = {
  todo: [],
};
function todo(state = INIT_STATE, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todo: [...state.todo, action.todo],
      };
    default:
      return state;
  }
}

export default todo;
