//create a file name store.js
import {createStore} from 'redux';
import rootReducer from './reducer';

const store = createStore(
rootReducer,
window.__REDUX_DEVTOOLS_EXTENSION__ &&
WINDOW.__REDUX_DEVTOOLS_EXTENSION__()
 // from Redux devtools extension
);
export default store;

