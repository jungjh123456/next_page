import React, { useRef, useState } from "react";
import Image from "next/image";
import { myLoader } from "./myLoader";
import Toggle from "./Toggle";
import { MainHeaderStyle } from "./headerStyle";
import RightMenu from "./RightMenu";
import { useRouter } from "next/dist/client/router";
const MainHeader = ({ white, applied }) => {
  const [activeMenu, setActiveMenu] = useState(false);
  const [menuToggle, setMenuToggle] = useState(false);
  const [checkBg, setCheckBg] = useState(false);
  const mainBarRef = useRef();
  const mainRef = useRef();
  const menuActive = () => {
    console.log("ddd");
    if (!menuToggle) {
      mainBarRef.current.style.display = "flex";
      mainRef.current.style.position = "fixed";
      mainRef.current.style.zIndex = "1000";
      mainBarRef.current.style.zIndex = "1000";
      setTimeout(() => {
        setMenuToggle(true);
      }, 200);
    }
    if (menuToggle) {
      setMenuToggle(false);
      // setCheckBg(true);
      setTimeout(() => {
        // mainBarRef.current.style.zIndex = '100'
        // mainBarRef.current.style.display = "none";
        mainRef.current.style.zIndex = "-100";
        mainBarRef.current.style.zIndex = "-100";
      }, 500);
    }
    // setActiveMenu(true);
  };
  const closeBtn = () => {
    setActiveMenu(false);
  };
  const history = useRouter();
  const backbtn = () => {
    console.log("dd");
    history.back();
  };
  return (
    <>
      <MainHeaderStyle applied={applied} style={white ? { background: "#fff" } : {}}>
        {applied ? (
          <Image onClick={backbtn} loader={myLoader} src="/imgs/backimg.png" alt="me" width="24" height="24" />
        ) : (
          <Image loader={myLoader} src="/imgs/Logo.png" alt="me" width="80" height="56" />
        )}
        <button onClick={menuActive} className="toggle">
          <Toggle />
        </button>
      </MainHeaderStyle>
      <RightMenu mainRef={mainRef} checkBg={checkBg} menuActive={menuActive} mainBarRef={mainBarRef} menuToggle={menuToggle} closeBtn={closeBtn} />
    </>
  );
};

export default MainHeader;
