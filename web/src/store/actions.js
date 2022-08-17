import { DELETE_DEVICE } from './types';
export const deleteDeviceAction = (id) => ({
	type: DELETE_DEVICE,
	payload: id,
	// id,
});
