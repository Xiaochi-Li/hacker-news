import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ResultsProvider } from './context/ResultsContext';

ReactDOM.render(
  <React.StrictMode>
    <ResultsProvider>
      <App />
    </ResultsProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
