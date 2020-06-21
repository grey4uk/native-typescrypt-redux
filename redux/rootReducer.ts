import {combineReducers} from 'redux';
import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  Task,
  actionsInterface,
} from './types';

const initialState: Task[] = [];

export const reducer = (state = initialState, action: actionsInterface): Task[] => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case EDIT_TASK:
      return [
        ...state.map((el) =>
          action.payload.id === el.id ? {...el, text: action.payload.text} : el,
        ),
      ];
    case DELETE_TASK:
      return [...state.filter((el) => el.id !== action.payload)];

    default:
      return state;
  }
};

// const rootReducer = combineReducers({reducer});

export type RootState = ReturnType<typeof reducer>;

// export default rootReducer;
