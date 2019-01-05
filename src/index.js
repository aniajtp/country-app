import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './DevTools';

render(
    <Provider store={store}>
      <div>
        <DevTools></DevTools>
        <h1>Inicjalizacja projektu</h1>
      </div>
    </Provider>,
    document.getElementById('root')
);