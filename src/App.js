import React from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="grid bg-black text-light font-cormorant overflow-x-hidden">
      <Nav />
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
