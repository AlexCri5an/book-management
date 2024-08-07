import React from 'react';
import './App.css';
import Header from './components/Header';
import BookList from './components/BookList';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <main>
        <BookList />
      </main>
      <Footer />
      <Sidebar />
    </div>
  );
};

export default App;
