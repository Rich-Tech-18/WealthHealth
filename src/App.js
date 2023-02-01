import React from 'react';
import Forms from './components/Form/Forms';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <div className="title">
        <h1>HRnet</h1>
      </div>
    <div className="container">
      <Link to="employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <Forms />
    </div>
    </React.Fragment>
    
  );
}

export default App;
