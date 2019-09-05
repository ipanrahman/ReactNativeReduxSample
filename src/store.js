import {createStore, combineReducers} from 'redux';
import placeReducer from './reducers/placeReducer';

const rootReducer = combineReducers({places: placeReducer});

const withReduxDevtools =
  __DEV__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__();

const configureStore = () => {
  return createStore(rootReducer, withReduxDevtools);
};

export default configureStore;
