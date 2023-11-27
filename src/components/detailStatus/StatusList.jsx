import { StatusContainer } from './StatusListStyle';
import StatusIcon from './StatusIcon';

export default function StatusList({ statusList }) {

	return (
		<StatusContainer>
			{
				statusList.map((status) => (
					<StatusIcon key={status.id} status={status}/>
				))
			}
		</StatusContainer>
	);
}