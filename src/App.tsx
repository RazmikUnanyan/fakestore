import React from 'react';
import {withLayout} from "./layout/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./pages/Main/Main";
import Product from "./pages/Product/Product";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/:idProduct" element={<Product/>}/>
        </Routes>
      </Router>
  );
}

export default withLayout(App);
