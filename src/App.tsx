import React from "react";
import "./App.css";
import Banner from "./Components/Banner";
import DrawerAppBar from "./Components/DrawerAppBar";
import Footer from "./Components/Footer";
import Partner from "./Components/Partner";

function App() {
  return (
    <div className="App">
      <DrawerAppBar />
      <Banner />
      <Partner />
      <Footer />
    </div>
  );
}

export default App;
