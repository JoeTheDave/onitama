import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'reducers';

export default function configureStore() {
  const rootReducer = combineReducers(reducers);

  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
