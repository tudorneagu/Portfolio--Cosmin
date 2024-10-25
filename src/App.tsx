// App.tsx
import { BrowserRouter } from "react-router-dom";
import { useContext } from "react";
import Menu from "./components/Menu/Menu";
import About from "./components/About";
import Journal from "./components/Journal";
import Portfolio from "./components/Portfolio";
import Price from "./components/Price";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MobileMenu from "./components/Menu/MobileMenu";
import Title from "./components/Menu/Title";
import { NavContext } from "./contexts/NavContext";

function App() {
  const { isMobile } = useContext(NavContext);
  return (
    <BrowserRouter>
      <div className="flex flex-col w-screen h-screen relative">
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
    </BrowserRouter>
  );
}

export default App;
