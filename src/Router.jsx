import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Main from "./pages/Main";
import Graph from "./pages/Graph";
import News from "./pages/News";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/graph/:name" element={<Graph />} />
        <Route path="/news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};
