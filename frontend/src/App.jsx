// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Add from "./components/Add";
// import Edit from "./components/Edit";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/add" element={<Add />} />
//         <Route path="/edit/:id" element={<Edit />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Add from "./components/Add";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
    </>
  );
}

export default App;





// import { useState } from "react";
// import Home from "./components/Home";
// //Some code missing here!!!
// import Navbar from "./components/Navbar";
// import Add from "./components/Add";
// function App() {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/add" element={<Add />} />

//       </Routes>
//     </>
//   );
// }

// export default App;
