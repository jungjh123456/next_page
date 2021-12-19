import React from "react";
import Image from "next/image";
import { myLoader } from "../asset/myLoader";
import Link from "next/dist/client/link";
import { MainSection3Wrap, MainSection4Wrap } from "./mainComponentStyle";
const MainSection4 = () => {
  return (
    <MainSection4Wrap>
      <div className="container">
        <h1>독독쌤의 간편한 발달 프로그램</h1>
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
    </MainSection4Wrap>
  );
};

export default MainSection4;
