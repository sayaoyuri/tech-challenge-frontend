import { useState } from 'react';
import { Container } from './HomeStyle';
import SearchBox from '../searchBox/SearchBox';
import TrackingList from '../trackingList/TrackingList';
import { useTracking } from '../../hooks/api/useTracking';
import { Link } from 'react-router-dom';

export default function Home() {
	const [searchValue, setSearchValue] = useState('');
	const { trackings, trackingsError, trackingsLoading, getTrackings } = useTracking(searchValue);

	return (
		<>
			<Link to={'../'}>{''}</Link>
			<Container>
				<SearchBox 
					searchValue={searchValue} 
					setSearchValue={setSearchValue}
					trackings={trackings}
					getTrackings={getTrackings} 
					trackingsLoading={trackingsLoading}
				/>
				{
					trackings && <TrackingList trackings={trackings} trackingsError={trackingsError}/>
				}
			</Container>
		</>
	);
}