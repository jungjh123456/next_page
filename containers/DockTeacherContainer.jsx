import React from "react";
import Footer from "../components/asset/Footer";
import MainHeader from "../components/asset/MainHeader";
import DockTeacherSection1 from "../components/dockTeacher/DockTeacherSection1";
import DockTeacherSection2 from "../components/dockTeacher/DockTeacherSection2";
import DockTeacherSection3 from "../components/dockTeacher/DockTeacherSection3";
import DockTeacherSection4 from "../components/dockTeacher/DockTeacherSection4";
import DockTeacherSection5 from "../components/dockTeacher/DockTeacherSection5";
import DockTeacherSection6 from "../components/dockTeacher/DockTeacherSection6";
import { DockTeacherWrap } from "./mainStyle";

const DockTeacherContainer = () => {
  const goDockTeacherPage = (e) => {};
  return (
    <DockTeacherWrap>
      <MainHeader />
      <DockTeacherSection1 />
      <DockTeacherSection2 />
      <DockTeacherSection3 />
      <DockTeacherSection4 />
      <DockTeacherSection5 />
      <DockTeacherSection6 />
      <Footer />
    </DockTeacherWrap>
  );
};

export default DockTeacherContainer;
