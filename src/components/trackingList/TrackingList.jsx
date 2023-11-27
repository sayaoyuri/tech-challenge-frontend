import CreatedAt from '../createdAt/CreatedAt';
import TrackingStatus from '../trackingStatus/TrackingStatus';
import { List, ListItem } from './TrackingListStyle';

export default function TrackingList({ trackings }) {
	console.log(trackings);
	return (
		<>
			<List>
				<h1>Seus Rastreios</h1>
				{
					trackings.length === 0 ?
						<p>Parece que voce nao possui nenhum rastreio ainda</p>
						:
						trackings.map((tracking, index) => (
							<ListItem key={tracking.id}>
								<p>{`${index + 1}:`}</p>
								<TrackingStatus status={tracking.trackingStatus[0]}/>
								<CreatedAt date={tracking.createdAt}/>
								<p>Detalhes</p>
							</ListItem>
						))
				}
			</List>
		</>
	);
}