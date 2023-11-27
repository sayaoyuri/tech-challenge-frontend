import { getCustomerTrackings } from '../../services/trackingApi';
import useAsync from '../useAsync';

export function useTracking(cpf, immediate = false) {
	const {
		data: trackings,
		loading: trackingsLoading,
		error: trackingsError,
		act: getTrackings
	} = useAsync(() => getCustomerTrackings(cpf), immediate);

	return {
		trackings,
		trackingsError,
		trackingsLoading,
		getTrackings,
	};
}