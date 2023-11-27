import { formatDate, parseStatus } from '../../utils';

export default function TrackingStatus({ status }) {
	const parsedStatus = parseStatus(status.message);
	const parsedDate = formatDate(status.date);

	return (
		<p>{`Status: ${parsedStatus} - (${parsedDate})`}</p>
	);
}