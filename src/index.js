import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GitHubProvider from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <React.StrictMode>
    <GitHubProvider>
      <Auth0Provider 
      domain={process.env.REACT_APP_DOMAIN}
      clientId={process.env.REACT_APP_API_KEY}
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
      >
          <App />
      </Auth0Provider>
    </GitHubProvider>
    </React.StrictMode>,
  document.getElementById('root')
);
