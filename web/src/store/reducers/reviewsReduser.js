import { initState } from '../initState';
import { ALL_REVIEWS } from '../types';

export const reviewsReduser = (state = initState.allReviews, action) => {
   const { type, payload } = action;
   switch (type) {
      case ALL_REVIEWS:
         return payload;
      default:
         return state;
   }
};