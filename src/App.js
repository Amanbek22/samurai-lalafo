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
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";

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
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route path="/ad/:id" element={<AdPage />} />
        <Route
          path="/create"
          element={
            <PrivateRoute>
              <CreateAdPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
