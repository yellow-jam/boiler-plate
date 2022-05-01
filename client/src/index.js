import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import 'antd/dist/antd.min.css';
import { applyMiddleware, createStore } from 'redux';
import promiseMiddleWare from 'redux-promise';
import ReduxThunk from 'redux-thunk';
import Reducer from './_reducers';


const container = document.getElementById('root');
/*

const root = ReactDOM.createRoot(container);
root.render(<App />);
*/

const createStoreWithMiddleWare = applyMiddleware(promiseMiddleWare, ReduxThunk)(createStore)

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStoreWithMiddleWare(Reducer,
          window.__REDUX_DEVTOOLS_EXTENSION__ &&
          window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
      <App />
    </Provider>
  </React.StrictMode>,
  container  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
