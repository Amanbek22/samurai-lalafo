import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import API from "./api/Api";
import "./App.css";
import Header from "./components/Header/Header";
import AdPage from "./pages/AdPage/AdPage";
import CreateAdPage from "./pages/CreateAdPage/CreateAdPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { housesSliceActions } from "./redux/houseSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    API.getAllAds().then((res) => {
      dispatch(housesSliceActions.addHouses(res.data));
    });
  }, [dispatch]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/ad/:id" element={<AdPage />} />
        <Route path="/create" element={<CreateAdPage />} />
      </Routes>
    </div>
  );
}

export default App;
