import React, { useEffect } from "react";
interface CookiesBarProps {
  setAcceptedCookies: React.Dispatch<React.SetStateAction<boolean>>;
}
import { atom, useRecoilState } from "recoil";

const themeOptions = ["light", "dark"] as const;
type WindowTheme = (typeof themeOptions)[number];

const handleTailwindDark = (theme: WindowTheme) => {
  if (theme === "dark") document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");
};

const getDefaultTheme = (): WindowTheme => {
  const localTheme =
    (window.localStorage.getItem("theme") as WindowTheme) || "dark";
  if (localTheme && themeOptions.includes(localTheme)) {
    handleTailwindDark(localTheme);
    return localTheme;
  }

  const { matches } = window.matchMedia("(prefers-color-scheme: dark)");
  handleTailwindDark(matches ? "dark" : "light");
  return matches ? "dark" : "light";
};

const themeAtom = atom<WindowTheme>({
  key: "theme",
  default: getDefaultTheme(),
});

const CookiesBar: React.FC<CookiesBarProps> = ({ setAcceptedCookies }) => {
  const [theme] = useRecoilState(themeAtom);

  console.log(theme);
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const handleAcceptedCookies = () => {
    setAcceptedCookies(true);
    localStorage.setItem("accepted-cookies", "true");
  };

  return (
    <div className="fixed  inset-0 flex items-center justify-center bg-[#080808] bg-opacity-70 z-[1000]">
      <div
        className={` absolute flex items-center sm:flex-row flex-col w-[100%] justify-center  sm:mx-0 gap-2 sm:gap-9 p-8 sm:py-[10px] py-3  ${
          theme == "light" ? "bg-[#F7F9FC]" : "bg-[#141414]"
        } rounded shadow-lg sm:bottom-0 bottom-0 z-10000`}
      >
        <img
          src="/illustrations/cookies.png"
          className="sm:w-10 sm:h-10 w-[30px] h-[30px]"
          alt="Cookies"
        />

        <p
          className={`${"text-[#777e86]"} text-[14px]  font-[600] block   sm:hidden`}
        >
          Our Website Uses Cookies
        </p>
        <p
          className={`text-center  text-[12px] sm:text-[16px] ${"text-[#818991]"} sm:text-start`}
        >
          We use cookies to provide our services and to show you ads. By using
          our website, you agree to the use of cookies as described in our{" "}
          <a
            className="text-[#1d4ed8]"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            Policies
          </a>
          .
        </p>
        <button
          className="rounded btn sm:px-7 sm:py-2 px-4 py-1 text-white bg-[#1d4ed8]"
          onClick={handleAcceptedCookies}
        >
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookiesBar;
