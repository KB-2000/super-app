import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import RegisterPage from "./pages/Register/RegisterPage";
import Genre from "./pages/Genre/Genre";
import HomePage from "./pages/Home/HomePage";
import MoviePage from "./pages/Movies/MoviePage";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<RegisterPage />}/>
          <Route path="/genre" element={<Genre/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/movie" element={<MoviePage/>}/>
          <Route path="*" element={<h1>Invalid URL</h1>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
