import React, { useState } from "react";
import AppliHeader from "../../components/asset/AppliHeader";
import MyHeaderSave from "../../components/asset/MyHeaderSave.";
import PlusImgIcon from "../../components/asset/PlusImgIcon";
import { ProfileContainerWrap } from "./myPageStyle";
import DaumPostcode from "react-daum-postcode";

const ProfileContainer = () => {
  const [addressModal, setAddressModal] = useState(false);
  const modalStatebtb = (e) => {
    setAddressModal(true);
  };
  const [address, setAddress] = useState("");
  const handleComplete = (data) => {
    console.log(data);
    // bname,sigungu
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
    setAddress(fullAddress);
    setSaveObj((state) => ({ ...state, address: fullAddress, sigungu: data?.sigungu, bname: data?.bname }));
  };
  const [url, setUrl] = useState("");
  const [saveObj, setSaveObj] = useState({});
  const imgChange = (e) => {
    const blob = new Blob(e.target.files, { type: e.target.files[0].type });
    console.log(blob);
    const urlImg = URL.createObjectURL(blob);
    console.log(urlImg);
    setUrl(urlImg);
    console.log(e.target.files);
    setSaveObj((state) => ({ ...state, img: e.target.files[0] }));
  };
  console.log(saveObj);
  const saveInput = (e) => {
    setSaveObj((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <ProfileContainerWrap>
        <MyHeaderSave white />
        <div className="container">
          <div className="img-wrap">
            <input onChange={imgChange} type="file" id="img" />
            <label htmlFor="img">
              <img src={url ? url : "/imgs/baby.png"} alt="프로필 이미지" />
            </label>
            <PlusImgIcon />
          </div>
          <div className="user_name-wrap">
            <span>성함</span>
            <input onChange={saveInput} type="text" name="customer_name" placeholder="장성원" />
          </div>
          <div className="user_name-wrap">
            <span>전화번호</span>
            <input onChange={saveInput} type="text" name="cellphone" placeholder="01077777777" />
          </div>
          <div className="user_name-wrap">
            <span>이메일</span>
            <input onChange={saveInput} type="text" name="email" placeholder="jjjj@naver.com" />
          </div>
          <div className="user_name-wrap">
            <span>주소</span>
            <button style={address.length ? { color: "#000" } : {}} onClick={modalStatebtb} type="text" placeholder="서울 성동구 종암로 14길 19-4">
              {address.length ? address : "지번,도로명,건물명으로 검색"}
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z"
                  fill="black"
                />
              </svg>
            </button>
            <input onChange={saveInput} type="text" name="address_detail" placeholder="상세주소를 입력해주세요" />
          </div>
          {addressModal && (
            <div className={addressModal ? "modal active" : "modal"}>
              <div className="address-wrap">
                <DaumPostcode style={{ maxWidth: "450px", boxSizing: "border-box", width: "100vw", height: "60vh" }} onComplete={handleComplete} />
              </div>
            </div>
          )}
        </div>
      </ProfileContainerWrap>
    </>
  );
};

export default ProfileContainer;
