import { getTrackingDetails }  from '../../services/trackingApi';
import useAsync from '../useAsync';

export function useTrackingDetails(trackingId) {
	const {
		data: tracking,
		loading: detailsLoading,
		error: detailsError,
		act: getDetails
	} = useAsync(() => getTrackingDetails(trackingId));

	return {
		tracking,
		detailsLoading,
		detailsError, 
		getDetails,
	};
}