import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { ChakraProvider } from '@chakra-ui/react'
import { store, persistor } from './store/index';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <ChakraProvider>
    <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById('root')
);

