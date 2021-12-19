import React, { useEffect, useState } from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import Image from "next/image";
import { myLoader } from "../../components/asset/myLoader";
import { ReviewInfoContainerWrap } from "./myPageStyle";
import { StarComponentWrap } from "../../components/asset/assetStyle";
import StarComponent from "../../components/asset/StarComponent";
import { useRouter } from "next/dist/client/router";
import MainHeader from "../../components/asset/MainHeader";

const ReviewInfoContainer = () => {
  const [text, setText] = useState("-");
  const [starLating, setStarLating] = useState(0);
  const [hover, setHover] = useState(null);
  const [rating, setRating] = useState({});
  const [sendMessageError, setSendMessageError] = useState("");

  useEffect(() => {
    if (rating.cleanliness === 1) {
      setText("부족했어요");
    }
    if (rating.cleanliness === 2) {
      setText("아쉬웠어요");
    }
    if (rating.cleanliness === 3) {
      setText("괜찮았어요");
    }
    if (rating.cleanliness === 4) {
      setText("따뜻했어요");
    }
    if (rating.cleanliness === 5) {
      setText("최고였어요");
    }
  }, [rating.cleanliness]);
  useEffect(() => {
    if (starLating) {
      setHover(starLating);
    }
  }, [starLating]);
  const history = useRouter();
  console.log(history);
  useEffect(() => {
    setStarLating(hover);
  }, [hover]);
  // 각 star rating의 상태를 관리하는 event function (name props로 식별)
  const changeStarRating = (starValue) => (e) => {
    const form = e.target.name;
    setSendMessageError("");
    setRating({ ...rating, [form]: starValue });
  };
  const [feedback, setfeedback] = useState("");

  const onTextChange = (e) => {
    setfeedback(e.target.value);
  };
  return (
    <ReviewInfoContainerWrap>
      <MainHeader applied white />
      <div className="container">
        <h1>솔직한 후기를 알려주세요.</h1>
        <div className="img-wrap">
          <Image loader={myLoader} src="/imgs/teacher.png" objectFit="contain" alt="me" width="96" height="96" />
        </div>
        <div className="teacher-info">
          <div>
            <span>담당 치료사</span>
            <span>강명실 선생님</span>
          </div>
          <div>
            <span>프로그램</span>
            <span>언어발달자극 프로그램</span>
          </div>
          <div>
            <span>이용권</span>
            <span>정기권</span>
          </div>
          <div>
            <span>기간</span>
            <span>2021.06.23 - 2021.11.23</span>
          </div>
        </div>
        <div className="star_wrap">
          <StarComponent text={text} hover={hover} setHover={setHover} changeStarRating={changeStarRating} rating={rating} />
        </div>
        <div className="review_text">
          <span>후기 작성하기</span>
          <textarea placeholder="선생님으로부터 도움을 받았던 부분, 개선이 되었으면 하는 부분 등을 자세히 기록해주세요." name="" id="" cols="30" rows="10"></textarea>
        </div>
        {history.query.status === "true" && (
          <div className="review_text">
            <span>선생님 답변</span>
            <textarea disabled placeholder="선생님으로부터 도움을 받았던 부분, 개선이 되었으면 하는 부분 등을 자세히 기록해주세요." name="" id="" cols="30" rows="10"></textarea>
          </div>
        )}
        {history.query.status === "false" && (
          <div className="btn-group">
            <button>후기 저장하기</button>
          </div>
        )}
      </div>
    </ReviewInfoContainerWrap>
  );
};

export default ReviewInfoContainer;
