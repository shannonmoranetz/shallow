import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './styles/main.scss';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const devTools = composeWithDevTools(applyMiddleware())
const store = createStore(rootReducer, devTools);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
document.getElementById('root'));

serviceWorker.unregister();
