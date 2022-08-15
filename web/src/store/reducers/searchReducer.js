import { initState } from '../initState';
import { SEARCH_DEVICE } from '../types';

export const searchReducer = (state = initState.searchDevices, action) => {
   const { type, payload } = action;
   switch (type) {
      case SEARCH_DEVICE:
         return payload;
      default:
         return state;
   }
};