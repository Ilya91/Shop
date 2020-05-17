import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import configureStore, { history } from './configureStore'
import * as serviceWorker from "../src/serviceWorker";

const store = configureStore()
const render = () => {
  ReactDOM.render(
      <Provider store={store}>
        <App history={history} />
      </Provider>,
    document.getElementById('react-root')
  )
}
render();
serviceWorker.register();
