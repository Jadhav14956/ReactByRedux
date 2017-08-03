import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducers from './reducers';
import {createContact} from './actions/index'; 

import App from './containers/App'

const store = createStore(allReducers);
store.dispatch(createContact({ Id : 1, Name : 'Sunil' , Number : 5512259762, Editable : false}));
store.dispatch(createContact({ Id : 2, Name : 'Anil' , Number : 5512259761, Editable : false}));
store.dispatch(createContact({ Id : 3, Name : 'Abhi' , Number : 5512259760, Editable : false}));
store.dispatch(createContact({ Id : 4, Name : 'Kirti' , Number : 5512259771, Editable : false}));

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
