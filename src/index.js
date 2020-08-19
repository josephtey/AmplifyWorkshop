import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Amplify from 'aws-amplify'
import { AmazonAIPredictionsProvider } from '@aws-amplify/predictions';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import config from './aws-exports'
import * as serviceWorker from './serviceWorker';

Amplify.configure(config)
Amplify.addPluggable(new AmazonAIPredictionsProvider());


ReactDOM.render(
  <React.StrictMode>
    <AmplifyAuthenticator>
      <App />
    </AmplifyAuthenticator>
    
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
