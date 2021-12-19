import { useRouter } from "next/dist/client/router";
import React from "react";
import ApplicationHeader from "../../components/asset/ApplicationHeader";
import CheckTable from "../../components/asset/CheckTable";
import CounSelorDateChange from "../../components/counselor/CounSelorDateChange";
import CounSelorLocation from "../../components/counselor/CounSelorLocation";
import { CounSelorStudyDateContainerWrap } from "./counselorStyle";

const CounSelorStudyDateContainer = () => {
  const param = useRouter();
  console.log(param.query);
  return (
    <>
      {+param.query.step === 1 && <CounSelorDateChange />}
      {+param.query.step === 2 && <CounSelorLocation />}
    </>
  );
};

export default CounSelorStudyDateContainer;
