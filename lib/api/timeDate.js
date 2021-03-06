export const timeDate = (time) => {
  // time = time.replace(/-/g, '/');
  const today = new Date(time);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return time ? `${year}.${("00" + month.toString()).slice(-2)}.${("00" + day.toString()).slice(-2)}` : "";
};
export const hoursListTime = (times) => {
  const today = new Date(times);

  const oneTime =
    today.getHours().toString() === "12"
      ? "12"
      : today.getHours().toString() === "13"
      ? "1"
      : today.getHours().toString() === "14"
      ? "2"
      : today.getHours().toString() === "15"
      ? "3"
      : today.getHours().toString() === "16"
      ? "4"
      : today.getHours().toString() === "17"
      ? "5"
      : today.getHours().toString() === "18"
      ? "6"
      : today.getHours().toString() === "19"
      ? "7"
      : today.getHours().toString() === "20"
      ? "8"
      : today.getHours().toString() === "21"
      ? "9"
      : today.getHours().toString() === "22"
      ? "10"
      : today.getHours().toString() === "23"
      ? "11"
      : today.getHours();
  let time = `${oneTime.toString().padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")} `;

  return times ? time : "";
};
export const timeNoSafariDate = (time) => {
  const today = new Date(time);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return time ? `${year}.${("00" + month.toString()).slice(-2)}.${("00" + day.toString()).slice(-2)}` : "";
};
export const timeInfoDate = (time) => {
  // time = time.replace(/-/g, '/');
  const today = new Date(time);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return time ? `${year}-${("00" + month.toString()).slice(-2)}-${("00" + day.toString()).slice(-2)}` : "";
};

export const monthDate = (time) => {
  // time = time.replace(/-/g, '/');
  const today = new Date(time);

  const month = today.getMonth() + 1;
  const day = today.getDate();

  return time ? `${("00" + month.toString()).slice(-2)}.${("00" + day.toString()).slice(-2)}` : "";
};
export const monthToDate = (time) => {
  // time = time.replace(/-/g, '/');
  const today = new Date(time);

  const month = today.getMonth() + 1;
  const day = today.getDate();

  return time ? `${("00" + month.toString()).slice(-2)}??? ${("00" + day.toString()).slice(-2)}???` : "";
};
export const timeMonthDate = (time) => {
  // time = time.replace(/-/g, '/');
  const today = new Date(time);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();

  return time ? `${("00" + month.toString()).slice(-2)}.${("00" + day.toString()).slice(-2)}` : "";
};
export const hoursTime = (times) => {
  // times = times.replace(/-/g, '/');
  const today = new Date(times);

  const oneTime =
    today.getHours().toString() === "12"
      ? "12"
      : today.getHours().toString() === "13"
      ? "1"
      : today.getHours().toString() === "14"
      ? "2"
      : today.getHours().toString() === "15"
      ? "3"
      : today.getHours().toString() === "16"
      ? "4"
      : today.getHours().toString() === "17"
      ? "5"
      : today.getHours().toString() === "18"
      ? "6"
      : today.getHours().toString() === "19"
      ? "7"
      : today.getHours().toString() === "20"
      ? "8"
      : today.getHours().toString() === "21"
      ? "9"
      : today.getHours().toString() === "22"
      ? "10"
      : today.getHours().toString() === "23"
      ? "11"
      : today.getHours();
  let time = `${today.getHours() >= 12 ? "??????" : "??????"} ${oneTime.toString().padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")} `;

  return times ? time : "";
};
export const hoursNoSafariTime = (times) => {
  const today = new Date(times);

  const oneTime =
    today.getHours().toString() === "12"
      ? "12"
      : today.getHours().toString() === "13"
      ? "1"
      : today.getHours().toString() === "14"
      ? "2"
      : today.getHours().toString() === "15"
      ? "3"
      : today.getHours().toString() === "16"
      ? "4"
      : today.getHours().toString() === "17"
      ? "5"
      : today.getHours().toString() === "18"
      ? "6"
      : today.getHours().toString() === "19"
      ? "7"
      : today.getHours().toString() === "20"
      ? "8"
      : today.getHours().toString() === "21"
      ? "9"
      : today.getHours().toString() === "22"
      ? "10"
      : today.getHours().toString() === "23"
      ? "11"
      : today.getHours();
  let time = `${today.getHours() >= 12 ? "??????" : "??????"} ${oneTime.toString().padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")} `;

  return times ? time : "";
};
export const hoursNoAmTime = (times) => {
  // times = times.replace(/-/g, '/');
  const today = new Date(times);

  let time = `${today.getHours().toString().padStart(2, "0")}:${today.getMinutes().toString().padStart(2, "0")} `;

  return times ? time : "";
};
export const getDate = (date) => {
  // date = date.replace(/-/g, '/');
  //??????????????? ????????? ???????????? ???
  var week = ["???", "???", "???", "???", "???", "???", "???"];
  var dayOfWeek = week[new Date(date).getDay()];
  return dayOfWeek;
};
export const getfullDate = (date) => {
  // date = date.replace(/-/g, '/');
  //??????????????? ????????? ???????????? ???
  var week = ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"];
  var dayOfWeek = week[new Date(date).getDay()];
  return dayOfWeek;
};
export const getNoSafariDate = (date) => {
  //??????????????? ????????? ???????????? ???
  var week = ["???", "???", "???", "???", "???", "???", "???"];
  var dayOfWeek = week[new Date(date).getDay()];
  return dayOfWeek;
};
export const timeInfofullDate = (time) => {
  // time = time.replace(/-/g, '/');
  var week = ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"];
  const today = new Date(time);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  var dayOfWeek = week[new Date(time).getDay()];
  const oneTime =
    today.getHours().toString() === "12"
      ? "12"
      : today.getHours().toString() === "13"
      ? "1"
      : today.getHours().toString() === "14"
      ? "2"
      : today.getHours().toString() === "15"
      ? "3"
      : today.getHours().toString() === "16"
      ? "4"
      : today.getHours().toString() === "17"
      ? "5"
      : today.getHours().toString() === "18"
      ? "6"
      : today.getHours().toString() === "19"
      ? "7"
      : today.getHours().toString() === "20"
      ? "8"
      : today.getHours().toString() === "21"
      ? "9"
      : today.getHours().toString() === "22"
      ? "10"
      : today.getHours().toString() === "23"
      ? "11"
      : today.getHours();
  let times = `${today.getHours() >= 12 ? "??????" : "??????"} ${oneTime.toString().padStart(2, "0")}??? ${today.getMinutes().toString().padStart(2, "0")}??? `;
  return time ? `${year}??? ${("00" + month.toString()).slice(-2)}???${("00" + day.toString()).slice(-2)}??? ${dayOfWeek} ${times}` : "";
};
export const timesessiongInfofullDate = (time) => {
  // time = time.replace(/-/g, '/');
  var week = ["?????????", "?????????", "?????????", "?????????", "?????????", "?????????", "?????????"];
  const today = new Date(time);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  var dayOfWeek = week[new Date(time).getDay()];
  const oneTime =
    today.getHours().toString() === "12"
      ? "12"
      : today.getHours().toString() === "13"
      ? "1"
      : today.getHours().toString() === "14"
      ? "2"
      : today.getHours().toString() === "15"
      ? "3"
      : today.getHours().toString() === "16"
      ? "4"
      : today.getHours().toString() === "17"
      ? "5"
      : today.getHours().toString() === "18"
      ? "6"
      : today.getHours().toString() === "19"
      ? "7"
      : today.getHours().toString() === "20"
      ? "8"
      : today.getHours().toString() === "21"
      ? "9"
      : today.getHours().toString() === "22"
      ? "10"
      : today.getHours().toString() === "23"
      ? "11"
      : today.getHours();
  let times = `${today.getHours() >= 12 ? "??????" : "??????"} ${oneTime.toString().padStart(2, "0")}??? ${today.getMinutes().toString().padStart(2, "0")}??? `;
  return time ? `${year}.${("00" + month.toString()).slice(-2)}.${("00" + day.toString()).slice(-2)} ${dayOfWeek} ${times}` : "";
};
export const timeTodayInfofullDate = (time) => {
  // time = time.replace(/-/g, '/');
  var week = ["???", "???", "???", "???", "???", "???", "???"];
  const today = new Date(time);
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  var dayOfWeek = week[new Date(time).getDay()];

  let times = `${today.getHours() >= 12 ? "??????" : "??????"} ${today.getHours().toString().padStart(2, "0")}??? ${today.getMinutes().toString().padStart(2, "0")}??? `;
  return time ? `${("00" + month.toString()).slice(-2)}??? ${("00" + day.toString()).slice(-2)}??? (${dayOfWeek})` : "";
};

// ?????? 9???

export const timeSiganDate = (time) => {
  // time = time.replace(/-/g, '/');
  const today = new Date(time);

  const oneTime =
    today.getHours().toString() === "12"
      ? "12"
      : today.getHours().toString() === "13"
      ? "1"
      : today.getHours().toString() === "14"
      ? "2"
      : today.getHours().toString() === "15"
      ? "3"
      : today.getHours().toString() === "16"
      ? "4"
      : today.getHours().toString() === "17"
      ? "5"
      : today.getHours().toString() === "18"
      ? "6"
      : today.getHours().toString() === "19"
      ? "7"
      : today.getHours().toString() === "20"
      ? "8"
      : today.getHours().toString() === "21"
      ? "9"
      : today.getHours().toString() === "22"
      ? "10"
      : today.getHours().toString() === "23"
      ? "11"
      : today.getHours();
  let times = `${today.getHours() >= 12 ? "??????" : "??????"} ${oneTime.toString().padStart(2, "0")}???`;
  return time ? times : "";
};

// ?????? 9??? 30???

export const timeMSDate = (time) => {
  // time = time.replace(/-/g, '/');
  const today = new Date(time);

  const oneTime =
    today.getHours().toString() === "12"
      ? "12"
      : today.getHours().toString() === "13"
      ? "1"
      : today.getHours().toString() === "14"
      ? "2"
      : today.getHours().toString() === "15"
      ? "3"
      : today.getHours().toString() === "16"
      ? "4"
      : today.getHours().toString() === "17"
      ? "5"
      : today.getHours().toString() === "18"
      ? "6"
      : today.getHours().toString() === "19"
      ? "7"
      : today.getHours().toString() === "20"
      ? "8"
      : today.getHours().toString() === "21"
      ? "9"
      : today.getHours().toString() === "22"
      ? "10"
      : today.getHours().toString() === "23"
      ? "11"
      : today.getHours();
  let times = `${today.getHours() >= 12 ? "??????" : "??????"} ${oneTime.toString().padStart(2, "0")}??? ${
    today.getMinutes().toString().padStart(2, "0") === "00" ? "" : `${today.getMinutes().toString().padStart(2, "0")}???`
  } `;
  return time ? times : "";
};
