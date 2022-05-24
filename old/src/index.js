import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { JssProvider } from 'react-jss';

import App from './containers/App';
import jssInstance from './architecture/jss-instance';
import configureStore from './architecture/configureStore';

const root = document.createElement('div');
root.setAttribute('id', 'root');

const content = (
  <Provider store={configureStore()}>
    <JssProvider jss={jssInstance}>
      <App />
    </JssProvider>
  </Provider>
);

render(content, root);
document.body.appendChild(root);
