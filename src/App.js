import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from "./pages/Register/RegisterPage";
import Genre from "./pages/Genre/Genre";
import HomePage from "./pages/Home/HomePage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />}/>
          <Route path="/genre" element={<Genre/>}/>
          <Route path="/home" element={<HomePage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
