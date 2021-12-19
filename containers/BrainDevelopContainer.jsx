import { useRouter } from "next/dist/client/router";
import React from "react";
import AppliHeader from "../components/asset/AppliHeader";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import BrainDevelopSection1 from "../components/brainDevelop/BrainDevelopSection1";
import BrainDevelopSection2 from "../components/brainDevelop/BrainDevelopSection2";
import BrainDevelopSection3 from "../components/brainDevelop/BrainDevelopSection3";
import BrainDevelopSection4 from "../components/brainDevelop/BrainDevelopSection4";
import BrainDevelopSection5 from "../components/brainDevelop/BrainDevelopSection5";
import BrainDevelopSection6 from "../components/brainDevelop/BrainDevelopSection6";
import BrainDevelopSection7 from "../components/brainDevelop/BrainDevelopSection7";
import BrainDevelopSection8 from "../components/brainDevelop/BrainDevelopSection8";
import { BrainDevelopWrap } from "./mainStyle";

const BrainDevelopContainer = () => {
  const history = useRouter();
  const applicationBtn = (e) => {
    history.push("/application/1");
  };
  return (
    <BrainDevelopWrap>
      <MainHeader applied />
      <BrainDevelopSection1 applicationBtn={applicationBtn} />
      <BrainDevelopSection2 />
      <BrainDevelopSection3 />
      <BrainDevelopSection4 />
      <BrainDevelopSection5 />
      <BrainDevelopSection6 />
      <BrainDevelopSection7 />
      <BrainDevelopSection8 />
      <Footer />
    </BrainDevelopWrap>
  );
};

export default BrainDevelopContainer;
