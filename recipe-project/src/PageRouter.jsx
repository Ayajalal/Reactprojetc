import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Componant/Layout";
import Login from "./Componant/Login";
import Register from "./Componant/Register";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

const PageRouter = () => {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {}, []);

  return (
    <Routes>
      <Route
        element={
          <Layout loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
        }
      >
        {loggedUser ? (
          <>
            <Route index element={<Homepage />} />
            <Route path="*" element={<NotFound />} />
          </>
        ) : (
          <>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </>
        )}
      </Route>
    </Routes>
  );
};

export default PageRouter;