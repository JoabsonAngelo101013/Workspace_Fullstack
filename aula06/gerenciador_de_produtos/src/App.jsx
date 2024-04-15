import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';

const App = () => {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
};

export default App;