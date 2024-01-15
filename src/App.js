import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from "./pages/Register/RegisterPage";
import Genre from "./pages/Genre/Genre";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />}/>
          <Route path="/genre" element={<Genre/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
