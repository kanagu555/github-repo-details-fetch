import React from "react";
import Footer from "./components/Footer";
import GithubRepo from "./components/GithubRepo";
import './components/design.css'

function App() {
  return (
    <div className="bg-height">
      <GithubRepo />
      <Footer />
    </div>
  );
}

export default App;
