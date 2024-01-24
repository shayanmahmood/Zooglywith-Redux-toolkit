import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './css/ImageUploader.css'
import './css/tuperAniamtion.css'
import './css/App.css'
import store from './store';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);

