import { initState } from "../initState";



export const adminReduser = (state = initState.adminState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADMIN_TYPE":
   
      return { ...state, ...payload };
    //   case "ADMIN_TYPE_DOW":
    //     // console.log(...state, ...payload);
    //      return { ...state, ...payload };
        default:
      return state;
  }
};
