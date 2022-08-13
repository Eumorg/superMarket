import { initState } from '../initState';
import { DELETE_DEVICE } from '../types';
import { ALL_DEVICE } from '../types';

export const devicesReducer = (state = initState.devices, action) => {
	const { type, payload } = action;
	switch (type) {
		case DELETE_DEVICE: {
			return state.filter((el) => el.id !== payload);
		}
		case ALL_DEVICE:
			return payload;
		default:
			return state;
	}
};
