import React from 'react';
import { createRoot } from 'react-dom/client';

// By using of the Resolve block in config - we do not indicate
// the relative path to the folder and the file extension
import '@styles/styles'; // === import '@/styles/styles' === import '.src/styles/styles.css'
import '@styles/less';
import '@styles/scss';

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => (
  <div className="container">
    <h1 className="title">Webpack assembling</h1>
    <hr></hr>
    <div className="logo"></div>
    <div className="box">
      <h2>Less</h2>
    </div>
    <div className="card">
      <h2>SCSS</h2>
    </div>
    <p className="date"></p>
  </div>
);

root.render(<App tab="home" />);
