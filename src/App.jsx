import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./Login";
import AppLayout from "./layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import Home from "./Home";
import { useState } from "react";

const App = () => {
  const [userDetails, setUserDetails] = useState(null);

  const updateUserDetails = (updatedData) => {
    setUserDetails(updatedData);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            userDetails ? (
              <Navigate to="/dashboard" />
            ) : (
              <AppLayout>
                <Home />
              </AppLayout>
            )
          }
        />
        <Route
          path="/login"
          element={
            userDetails ? (
              <Navigate to="/dashboard" />
            ) : (
              <AppLayout>
                <Login updateUserDetails={updateUserDetails} />
              </AppLayout>
            )
          }
        />
        <Route
          path="/dashboard"
          element={userDetails ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
