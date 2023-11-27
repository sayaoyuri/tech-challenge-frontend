import api from './api';

export async function getCustomerTrackings (cpf) {
	const response = await api.get(`/tracking/${cpf}`);

	return response.data;
}