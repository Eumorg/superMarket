import { initState } from "../initState";
export const inputReduser = (state = initState.inputState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "USER_TYPE_NAME":
      return { payload };
    case "USER_TYPE":
      return { ...state, ...payload };
    case "USER_DELETE":
      return { payload };
    default:
      return state;
  }
};
