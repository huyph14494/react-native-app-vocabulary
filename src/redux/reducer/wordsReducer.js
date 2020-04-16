import actiontypes from '../action/actiontypes';

const defaultWords = [];

export default function wordsReducer(state = defaultWords, action) {
  if (action.type === actiontypes.ON_SWITCH_STATUS) {
    let wordsNew = state.map(value => {
      if (value._id === action.word._id) {
        return {...value, isMemorized: action.word.isMemorized};
      }
      return value;
    });
    return wordsNew;
  }
  if (action.type === actiontypes.ON_ADD_WORD) {
    let wordsNew = [...state, action.word];
    return wordsNew;
  }
  if (action.type === actiontypes.ON_REMOVE_WORD) {
    let wordsNew = state.filter(value => value._id !== action.word._id);
    return wordsNew;
  }

  if (action.type === actiontypes.FETCH_DATA_WORDS) {
    return action.words;
  }
  return state;
}
