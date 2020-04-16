import actiontypes from '../action/actiontypes';

const defaultWords = '1';

export default function wordsReducer(state = defaultWords, action) {
  if (action.type === actiontypes.ON_SET_FILTER_MODE) {
    return action.filtermode;
  }

  return state;
}
