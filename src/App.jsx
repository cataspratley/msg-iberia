import React from 'react';
import './App.css';
import Header from './components/Header';
import SelectedTable from './components/SelectedTable';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="app">
      <Header />
      <SelectedTable />
      <Footer />
    </div>
  );
};

export default App;
