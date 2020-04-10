import {combineReducers} from 'redux';
import wordsReducer from './wordsReducer';

const reducer = combineReducers({
  words: wordsReducer,
});

export default reducer;
