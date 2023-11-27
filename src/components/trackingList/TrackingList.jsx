import { Link } from 'react-router-dom';
import CreatedAt from '../createdAt/CreatedAt';
import TrackingStatus from '../trackingStatus/TrackingStatus';
import { List, ListItem } from './TrackingListStyle';
import ErrorMessage from '../errorMessage/ErrorMessage';

export default function TrackingList({ trackings, trackingsError }) {

	return (
		<List>
			<h1>Seus Rastreios</h1>
			{
				trackingsError ?
					trackingsError.response.status === 404 ?
						<ErrorMessage message={'Lamentamos! Não encontramos seu CPF!'}/>
						: <ErrorMessage message={'Lamentamos! Um erro inesperado ocorreu!'}/>
					:	
					trackings.length === 0 ?
						<p>Parece que voce nao possui nenhum rastreio ainda</p>
						:
						trackings.length ?
							trackings.map((tracking, index) => (
								<ListItem key={tracking.id}>
									<p>{`${index + 1}:`}</p>
									<TrackingStatus status={tracking.trackingStatus[0]}/>
									<CreatedAt date={tracking.createdAt}/>
									<Link to={`/tracking/details/${tracking.id}`}>Detalhes</Link>
								</ListItem>
							))
						: <></>
			}
		</List>
	);
}