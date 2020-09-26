import React from 'react';

import LugaresNavigator from './navegacao/LugaresNavigator';

import { 
  createStore, 
  combineReducers, 
  applyMiddleware  
} from 'redux';

import { Provider } from 'react-redux';

import reduxThunk from 'redux-thunk';
import lugaresReducers from './store/lugares-reducers';

const rootReducer = combineReducers({
  lugares: lugaresReducers
});

const store = createStore (rootReducer, applyMiddleware (reduxThunk));

export default function App() {
  return (
    <Provider store={store}>
      <LugaresNavigator />
    </Provider>
  );
}


