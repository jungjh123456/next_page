import React from "react";
import { MainSection4Wrap } from "../main/mainComponentStyle";
import Image from "next/image";
import Link from "next/dist/client/link";
import { myLoader } from "../asset/myLoader";
import { Program4Wrap } from "./ProgramStyle";
const ProgramSection4 = () => {
  return (
    <Program4Wrap>
      <div className="container">
        <div className="reason-text">
          <span>우리아이는 어떤</span>
          <span>프로그램이 필요할까요?</span>
        </div>
        <div className="img-wrap">
          <Link href="/braindevelop">
            <a>
              <Image loader={myLoader} src="/imgs/program1.png" layout="responsive" objectFit="contain" alt="me" width="320" height="320" />
            </a>
          </Link>
          <Link href="/homeGo">
            <a>
              <Image loader={myLoader} src="/imgs/program2.png" layout="responsive" objectFit="contain" alt="me" width="320" height="320" />
            </a>
          </Link>
        </div>
      </div>
    </Program4Wrap>
  );
};

export default ProgramSection4;
