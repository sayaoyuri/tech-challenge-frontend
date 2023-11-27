import { formatDateTime, parseStatus } from '../../utils';
import { Status } from './StatusListStyle';

export default function StatusIcon({ status }) {
	const parsedStatus = parseStatus(status.message);
	const parsedDate = formatDateTime(status.date);

	return (
		<Status key={status.id}>
			<p>{parsedStatus}</p>
			<p>{parsedDate}</p>
		</Status>
	);
}