import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import HomeGoSection1 from "../components/homeGo/HomeGoSection1";
import HomeGoSection2 from "../components/homeGo/HomeGoSection2";
import HomeGoSection3 from "../components/homeGo/HomeGoSection3";
import HomeGoSection4 from "../components/homeGo/HomeGoSection4";
import HomeGoSection5 from "../components/homeGo/HomeGoSection5";
import HomeGoSection6 from "../components/homeGo/HomeGoSection6";
import HomeGoSection7 from "../components/homeGo/HomeGoSection7";
import HomeGoSection8 from "../components/homeGo/HomeGoSection8";
import { BrainDevelopWrap } from "./mainStyle";

const HomeGoContainer = () => {
  const history = useRouter();
  const applicationBtn = (e) => {
    history.push("/application/1");
  };
  return (
    <BrainDevelopWrap>
      <MainHeader applied />
      <HomeGoSection1 applicationBtn={applicationBtn} />
      <HomeGoSection2 />
      <HomeGoSection3 />
      <HomeGoSection4 />
      <HomeGoSection5 />
      <HomeGoSection6 />
      <HomeGoSection7 />
      <HomeGoSection8 />
      <Footer />
    </BrainDevelopWrap>
  );
};

export default HomeGoContainer;
