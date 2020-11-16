import type { Action } from './actions';

export type NotesState = {
  notes: string[];
};

const initialState = {
  notes: [],
};

export const notesReducer = (
  state: NotesState = initialState,
  action: Action
) => {
  switch (action.type) {
    case 'ADD_NOTE': {
      return {
        ...state,
        notes: [...state.notes, action.payload],
      };
    }
    case 'DELETE_NOTE': {
      return {
        ...state,
        notes: [...state.notes.filter((item) => item !== action.payload)],
      };
    }
    default:
      return state;
  }
};
