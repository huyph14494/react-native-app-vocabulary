import actiontypes from './actiontypes';
import axios from 'axios';

const url = 'https://server2301.herokuapp.com/word/';

function onRemoveWord(_id) {
  return dispatch => {
    axios
      .delete(url + _id)
      .then(response => {
        dispatch({type: actiontypes.ON_REMOVE_WORD, word: response.data.w});
      })
      .catch(error => console.log(error));
  };
}

function onToggleWord(_id, isMemorized) {
  return dispatch => {
    axios
      .put(url + _id, {isMemorized})
      .then(response => {
        dispatch({type: actiontypes.ON_SWITCH_STATUS, word: response.data.w});
      })
      .catch(error => console.log(error));
  };
}

function onAddWord(en, vn) {
  return dispatch => {
    axios
      .post(url, {en, vn})
      .then(response => {
        dispatch({type: actiontypes.ON_ADD_WORD, word: response.data.word});
      })
      .catch(error => console.log(error));
  };
}

function fetchAllWords() {
  return dispatch => {
    axios.get(url).then(response => {
      dispatch({
        type: actiontypes.FETCH_DATA_WORDS,
        words: response.data.words,
      });
    });
  };
}
export default {
  onRemoveWord,
  onToggleWord,
  onAddWord,
  fetchAllWords,
};
