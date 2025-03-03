import { lazy, useState, useEffect } from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RootContainer from "./globals/root";
import CookiesBar from "./components/CookiesBar";
import Privacy from "./FooterPages/Privacy";
import About from "./pages/FeaturePages/about";
import ServicesPage from "./FooterPages/ServicesPage";
import CareersPage from "./FooterPages/Careers";

import Brochure from "./components/Brochure";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import ETAbout from "./pages/ETAbout";
import Contact from "./pages/Contact";

import { User } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import SignUp from "./components/Register";
import Profile from "./components/Profile";

const Home = lazy(() => import("./pages/home"));

const App = () => {
  const [acceptedCooikies, setAcceptedCookies] = useState<boolean>(
    localStorage.getItem("accepted-cookies") ? true : false
  );
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser);
    });
    return () => unsubscribe();
  }, []);
  useEffect(() => {
    const preventRightClick = (event: MouseEvent) => {
      event.preventDefault();
    };

    const preventDevTools = (e: KeyboardEvent) => {
      if (
        e.keyCode === 123 ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 73) ||
        (e.ctrlKey && e.shiftKey && e.keyCode === 74) ||
        (e.ctrlKey && e.keyCode === 85)
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", preventRightClick);
    window.addEventListener("keydown", preventDevTools);

    return () => {
      document.removeEventListener("contextmenu", preventRightClick);
      window.removeEventListener("keydown", preventDevTools);
    };
  }, []);
  return (
    <RecoilRoot>
      {!acceptedCooikies && (
        <CookiesBar setAcceptedCookies={setAcceptedCookies} />
      )}
      <BrowserRouter>
        <RootContainer>
          <Routes>
            <Route path="/" element={user ? <Navigate to="/profile" /> : <Home />} />
            <Route path="/privacy" element={<Privacy/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<ServicesPage/>} />
            <Route path="/careers" element={<CareersPage/>} />

            <Route path="/brochure" element={<Brochure />} />
            <Route path="/etabout" element={<ETAbout />} />
            <Route path="/etservices" element={<Services />} />
            <Route path="/etpricing" element={<Pricing />} />
            <Route path="/etcontact" element={<Contact />} />

            <Route path="/" element={user ? <Navigate to="/profile" /> : <Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
          <ToastContainer />
        </RootContainer>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
