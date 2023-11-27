import { useState } from 'react';
import { Container } from './HomeStyle';
import SearchBox from '../searchBox/SearchBox';
import TrackingList from '../trackingList/TrackingList';
import { useTracking } from '../../hooks/api/useTracking';
import ErrorMessage from '../errorMessage/ErrorMessage';

export default function Home() {
	const [searchValue, setSearchValue] = useState('');
	const { trackings, trackingsError, trackingsLoading, getTrackings } = useTracking(searchValue);
	console.log(trackingsError);

	return (
		<Container>
			<SearchBox 
				searchValue={searchValue} 
				setSearchValue={setSearchValue}
				trackings={trackings}
				getTrackings={getTrackings} 
				trackingsLoading={trackingsLoading}
			/>
			{
				trackingsError ?
					trackingsError.response.status === 404 ?
						<ErrorMessage message={'Lamentamos! Não encontramos seu CPF!'}/>
					: <ErrorMessage message={'Lamentamos! Um erro inesperado ocorreu!'}/>
				:	trackings ? 
					<TrackingList trackings={trackings}/>
				: <></>
			}
		</Container>
	);
}