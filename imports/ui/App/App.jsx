import React from 'react';
import Hello from '../Hello.jsx';
import Info from '../Info.jsx';
import './App.css';

const App = () => (
  <div>
    <header className='header navbar-fixed'>
      <center>
        <h1>Crud</h1>
      </center>
    </header>
    <div className='row'>
    <div className='col s12 m4 l2 xl2 sidebar'>
      <ul id="Navigation">
        <li><a href="#">Nav</a></li>
        <li><a href="#">Nav</a></li>
        <li><a href="#">Nav</a></li>
        <li><a href="#">Nav</a></li>
        <li><a href="#">Nav</a></li>
        <li><a href="#">Nav</a></li>
      </ul>
    </div>
    <div className='col s12 m9 l10 xl10'>
      <Hello />
    </div>
    </div>
  </div>
);

export default App;
