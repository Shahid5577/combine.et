import { lazy, useState } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootContainer from "./globals/root";
import CookiesBar from "./components/CookiesBar";
import Privacy from "./FooterPages/Privacy";
import About from "./pages/FeaturePages/about";


const Home = lazy(() => import("./pages/home"));

const App = () => {
  const [acceptedCooikies, setAcceptedCookies] = useState<boolean>(
    localStorage.getItem("accepted-cookies") ? true : false
  );
  return (
    <RecoilRoot>
      {!acceptedCooikies && (
        <CookiesBar setAcceptedCookies={setAcceptedCookies} />
      )}
      <BrowserRouter>
        <RootContainer>
          <Routes>
            <Route path="" Component={Home} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/about" element={<About/>} />
          </Routes>
        </RootContainer>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
