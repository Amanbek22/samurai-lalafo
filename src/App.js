import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import AdPage from './pages/AdPage/AdPage';
import CreateAdPage from './pages/CreateAdPage/CreateAdPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';

function App() {
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    fetch("https://605b21f027f0050017c063b9.mockapi.io/api/v3/houses")
      .then((res) => res.json())
      .then((data) => setHouses(data))
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage houses={houses} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage houses={houses} />} />
        <Route path="/ad/:id" element={<AdPage />} />
        <Route path="/create" element={<CreateAdPage />} />
      </Routes>
    </div>
  );
}

export default App;
