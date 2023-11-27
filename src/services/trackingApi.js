import api from './api';

export async function getCustomerTrackings (cpf) {
	const response = await api.get(`/tracking/${cpf}`);

	return response.data;
}

export async function getTrackingDetails(id) {
	const response = await api.get(`/tracking/details/${id}`);

	return response.data;
}