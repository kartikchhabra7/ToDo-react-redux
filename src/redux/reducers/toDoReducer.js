import { ADD_TODO, DELETE_TODO, REMOVE_TODO } from "../action/actionType";

const intialState = {
  list: [],
};

const ToDoReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case DELETE_TODO:
    //   const newList = ;
      return {
        ...state,
        list: state.list.filter((elem) => elem.id !== action.id),
      };

    case REMOVE_TODO:
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default ToDoReducer;
