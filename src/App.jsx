import React from 'react';
import './App.css';
import Carbon from './components/Carbon';
import Card from './components/IndexCard';
import Carbonfn from './components/Carbonfn';
import Index from './Index';
import Info from './Info';
import Calc from './Calc';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Index />}></Route>
          <Route exact path='/info' element={<Info />}></Route>
          <Route exact path='/calculator' element={<Calc />}></Route>
        </Routes>
    </Router>
  );
}

