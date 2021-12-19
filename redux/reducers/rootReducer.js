import { all } from "@redux-saga/core/effects";
import { combineReducers } from "redux";
import count, { countRequestSaga } from "./modules/count";
import loading from "./modules/loading";
import myPage from "./modules/myPage";
const rootReducer = combineReducers({
  count,
  loading,
  myPage,
});

export function* rootSaga() {
  yield all([countRequestSaga()]);
}

export default rootReducer;
