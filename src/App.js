import React from "react";
import { Routes, Route } from "react-router-dom";
import GlobalContext from "./utils/MainContext";
import CurrencyConverter from "./Pages/CurrentPage";
import TaskPage from "./Pages/TaskPage";
import Contact from "./Pages/Contact";
import Header from "./components/Header";

const App = () => {
  return (
    <GlobalContext>
      <Header />
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/currency"
          element={<CurrencyConverter />}
        ></Route>
      </Routes>
    </GlobalContext>
  );
};

export default App;
