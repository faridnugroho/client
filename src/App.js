import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbars from "./components/Navbars";
import Beranda from "./pages/Beranda";
import Pay from "./pages/Pay";
import Transaction from "./pages/Transaction";
import AddMusic from "./pages/AddMusic";
import AddArtist from "./pages/AddArtist";
import PageNotFound from "./pages/Error";

function App() {
  return (
    <>
      <Navbars />
      <Routes>
        <Route path="/" element={<Beranda />}></Route>
        <Route path="/pay" element={<Pay />}></Route>
        <Route path="/admin" element={<Transaction />}></Route>
        <Route path="/admin/add-music" element={<AddMusic />}></Route>
        <Route path="/admin/add-artist" element={<AddArtist />}></Route>

        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;
