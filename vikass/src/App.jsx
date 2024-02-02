import Contact from "./components/contact/contact";
 import Header from "./components/header/header";
import Intro from "./components/intro/intro";
import Portfolio from "./components/portfolio/portfolio";
import Works from "./components/works/works";
import Testimonials from "./components/testimonials/testimonials";
import Menu from "./components/menu/menu";
import "./app.scss"
import { useState } from "react";

function App() {
   const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      {/* <Intro/> */}
      <Header menuOpen= {menuOpen}  setMenuOpen={setMenuOpen}/>
      <Menu menuOpen= {menuOpen}  setMenuOpen={setMenuOpen} />

      <div className="sections">
        <Intro/> 
         <Portfolio/>
        <Works/>
        <Testimonials/>
        <Contact/>

      </div>
    </div>
  );
}

export default App;
