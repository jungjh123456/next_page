import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlugWrap } from "../components/style";
import { testGet } from "../redux/reducers/modules/count";

import testImg from "../style/imgs/testImg.png";
import { useRouter } from "next/dist/client/router";
import qs from "query-string";
import { MainWrap } from "./mainStyle";
import MainSection1 from "../components/main/MainSection1";
import MainHeader from "../components/asset/MainHeader";
import MainSection2 from "../components/main/MainSection2";
import MainSection3 from "../components/main/MainSection3";
import MainSection4 from "../components/main/MainSection4";
import MainSection5 from "../components/main/MainSection5";
import MainSection6 from "../components/main/MainSection6";
import MainSection7 from "../components/main/MainSection7";
import Footer from "../components/asset/Footer";
import RightMenu from "../components/asset/RightMenu";

const MainContainer = () => {
  const dispatch = useDispatch();
  const history = useRouter();
  console.log(history.query);
  console.log(qs);
  const {
    count: { list },
  } = useSelector(({ count }) => ({ count }));
  const queryObj = history.query;
  console.log(queryObj);
  useEffect(() => {
    dispatch(testGet());
  }, []);
  const applicationBtn = (e) => {
    history.push("/application/1");
  };
  return (
    <>
      <MainWrap>
        <MainHeader />
        <MainSection1 applicationBtn={applicationBtn} />
        <MainSection2 />
        <MainSection3 />
        <MainSection4 />
        <MainSection5 />
        <MainSection6 />
        <MainSection7 />
        <Footer />
        {/* <MainSection1 />
      <MainSection1 />
      <MainSection1 />
      <MainSection1 /> */}
      </MainWrap>
    </>
  );
};

export default MainContainer;
