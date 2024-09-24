import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Layout = () => <h1>This is Layout</h1>;

const App = () => {
  return (
    <BrowserRouter>
      <Routes>  {/* Ensure this is used */}
        <Route path='/' element={<Layout/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
