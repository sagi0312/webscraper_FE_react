import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/about" element={<About />}></Route>
          <Route path="/contactUs" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Header />
      <About />
    </div>
  );
}

export default App;
