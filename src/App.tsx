import React from "react";
import NavBar from "./componets/navbar/NavBar";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HomePage />
      </main>
    </>
  );
};

export default App;
