import './App.css';
import {Switch, Route} from 'react-router-dom'
import Layout from './Components/Layouts'
import React from 'react'
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Growth from './Components/Growth/Growth'
import Sections from './Components/Sections/Sections'

function App() {
  return (
  <>
    <Layout>
      <Home />
      <About />
      <Growth />
      <Sections />

    </Layout>  
  </>
    );
}

export default App;
