import { useRouter } from "next/dist/client/router";
import React, { useEffect, useState } from "react";
import ApplicationHeader from "../components/asset/ApplicationHeader";
import AppliHeader from "../components/asset/AppliHeader";
import Progress from "../components/asset/Progress";
import { ApplicationContainerWrap, StudyOkWrap } from "./applicationStyle";
import DaumPostcode from "react-daum-postcode";
import BigButton from "../components/asset/BigButton";
import ApplicationSection1 from "../components/application/ApplicationSection1";
import BabyInfo from "../components/application/BabyInfo";
import ProgramCheckPage from "../components/application/ProgramCheckPage";
const ApplicationContainer = () => {
  const param = useRouter();
  const [percent, setPercent] = useState(0);
  console.log(param);
  useEffect(() => {
    if (param.query.id) setPercent((param.query.id / 7) * 100);
  }, [param.query.id]);
  const [addressModal, setAddressModal] = useState(false);
  const modalStatebtb = (e) => {
    setAddressModal(true);
  };
  const handleComplete = (data) => {
    console.log(data);
    let fullAddress = data.address;
    let extraAddress = "";
    console.log(extraAddress);
    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddress += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
    setAddressModal(false);
  };
  return (
    <>
      {+param.query.id === 1 && (
        <>
          {false ? (
            <StudyOkWrap>
              <ApplicationHeader message={"수업가능 여부"} white />
              <div className="container">
                <div className="text">
                  <h1>방문수업이 가능한 지역입니다.</h1>
                  <div>
                    <span>방문 선생님께서 체험수업을 준비하실 수 있도록 아동정보를 꼼꼼하게 작성해주세요!</span>
                  </div>
                </div>
                <div className="btn-wrap">
                  <BigButton>아동정보 작성하기</BigButton>
                </div>
              </div>
            </StudyOkWrap>
          ) : (
            <ApplicationSection1 param={param} percent={percent} addressModal={addressModal} modalStatebtb={modalStatebtb} handleComplete={handleComplete} />
          )}
        </>
      )}
      {+param.query.id === 2 && (
        <>
          <BabyInfo param={param} percent={percent} />
        </>
      )}
      {+param.query.id === 3 && (
        <>
          <ProgramCheckPage param={param} percent={percent} />
        </>
      )}
      {+param.query.id === 4 && <>{param.query.program === "study" && <ProgramCheckPage param={param} percent={percent} />}</>}
    </>
  );
};

export default ApplicationContainer;
