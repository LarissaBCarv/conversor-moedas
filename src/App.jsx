import React from "react";
import Header from "./Header";
import Converter from "./Converter";
import Footer from "./Footer";
import backgroundVideo from "./assets/meu-video.mp4";
import "./global.css";

function App() {
  return (
    <div className="app-container">
      <video
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
        src={backgroundVideo}
      />
      <Header />
      <main className="main-container">
        <Converter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
