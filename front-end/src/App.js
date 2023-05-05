import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginPage from "./components/Login";
import RegisterPage from "./components/Register";
import PlannerPage from "./components/Planner";

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/planner" element={<PlannerPage />} />
        </Routes>
      </div>
    </Router>
  );
}