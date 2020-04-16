import {combineReducers} from 'redux';
import wordsReducer from './wordsReducer';
import filterModeReducer from './filterModeReducer';

const reducer = combineReducers({
  words: wordsReducer,
  filtermode: filterModeReducer,
});

export default reducer;
