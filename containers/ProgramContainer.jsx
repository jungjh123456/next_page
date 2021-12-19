import { useRouter } from "next/dist/client/router";
import React from "react";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import ProgramSection1 from "../components/program/ProgramSection1";
import ProgramSection2 from "../components/program/ProgramSection2";
import ProgramSection3 from "../components/program/ProgramSection3";
import ProgramSection4 from "../components/program/ProgramSection4";
import ProgramSection5 from "../components/program/ProgramSection5";
import { MainWrap, ProgramWrap } from "./mainStyle";

const ProgramContainer = () => {
  const history = useRouter();
  const goDockTeacherBtn = (e) => {
    history.push("/");
  };
  const applicationBtn = (e) => {
    history.push("/application/1");
  };
  return (
    <ProgramWrap>
      <MainHeader white />
      <ProgramSection1 applicationBtn={applicationBtn} />
      <ProgramSection2 />
      <ProgramSection3 />
      <ProgramSection4 />
      <ProgramSection5 goDockTeacherBtn={goDockTeacherBtn} />
      <Footer />
    </ProgramWrap>
  );
};

export default ProgramContainer;
