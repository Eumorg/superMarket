import { initState } from "../initState";

export const inputReduser = (state = initState.inputState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_TYPE_NAME":
      // console.log("USER_TYPE_NAME",payload);
      return { payload };
    case "USER_TYPE":
      // console.log("USER_TYPE", {...state, ...payload});
      return { ...state, ...payload };
    case "USER_DELETE":
      return { payload };
    default:
      return state;
  }
};
