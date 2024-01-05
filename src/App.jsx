import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Aiguru from "./components/Aiguru";
import Chat from "./components/Chat";
import Meditation from "./components/Meditation";
import Game from "./components/Game";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <main>
          <div id="aiguru">
            <Aiguru />
          </div>

          <div id="chat">
            <Chat />
          </div>

          <div id="meditation">
            <Meditation />
          </div>

          <div id="games">
            <Game />
          </div>

          <div id="contact">
            <Contact />
          </div>
        </main>

        <Footer/>
      </div>
    </Router>
  );
};

export default App;
