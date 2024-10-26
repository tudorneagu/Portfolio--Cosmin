// App.tsx

import { useContext, useState, useEffect } from "react";
import Menu from "./components/Menu/Menu";
import About from "./components/About";
import Journal from "./components/Menu/Journal";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MobileMenu from "./components/Menu/MobileMenu";
import Title from "./components/Menu/Title";
import { NavContext } from "./contexts/NavContext";

function App() {
  const { isMobile } = useContext(NavContext);
  const [langFr, setLangFr] = useState<boolean>(false);

  useEffect(() => {
    const lang = localStorage.getItem("i18nextLng");
    if (lang === "fr") setLangFr(true);
  }, []);
  console.log(langFr);
  return (
    <div className="md:flex md:flex-col h-full bg-background md:items-center relative">
      <div className=" md:max-w-[1400px]">
        <header className="top-0 fixed z-50 ">
          {isMobile ? (
            <>
              <MobileMenu />
              <div className="absolute top-4 -right-4 z-50">
                <Title />
              </div>
            </>
          ) : (
            <Menu />
          )}
        </header>
        <main>
          <Home />
          <About />
          <Journal />
          <Portfolio />
          <Price />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;
