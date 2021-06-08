import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import {BrowserRouter} from "react-router-dom";
import ContentContainer from "./components/content/Contents.container";
import {useAuth} from "./assets/hooks/auth";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ContentContainer />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
