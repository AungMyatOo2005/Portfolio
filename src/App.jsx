import { useEffect, useState } from "react";
import "./app.css";
import Home from "./views/Home";
import About from "./views/About";
import Navbar from "./components/Navbar";
import Project from "./views/Project";
import Content from "./views/Content";
import NavActiveController from "./util/NavActiveController";
import Intersecting from "./util/Intersecting";
function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    Intersecting();
  });

  {
    isDarkMode
      ? document.body.classList.remove("light-theme")
      : document.body.classList.add("light-theme");
  }

  useEffect(() => {
    document.addEventListener("scroll", NavActiveController);

    window.addEventListener("load", () => {
      scrollTo(0, 1);
    });
  }, []);
  window.addEventListener("click", () => {
    setToggle(false);
  });

  return (
    <div className={` min-h-screen w-full`}>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        toggle={toggle}
        setToggle={setToggle}
      />
      <Home isDarkMode={isDarkMode} />
      <About isDarkMode={isDarkMode} />
      <Project isDarkMode={isDarkMode} />
      <Content isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
