import React, { useContext, useNavigate } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Header from "./components/Header/Header";
import { AuthContext } from './components/AuthContext';
import './App.css';
import Footer from './components/Footer/Footer';

function App() {


  const { isLogged } = useContext(AuthContext);

  return (
    <div className="App">
        {localStorage.getItem("isLogged") ? <Header />:null}
        <main>
          <Routes>
          <Route path="/login" element={<Login />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/faq" element={<FAQ />}></Route>
            <Route path="/contact" element={<Contact />}></Route>

          </Routes>
        </main>
        {localStorage.getItem("isLogged") ? <Footer />:null}

    </div>
  );
}

export default App;
