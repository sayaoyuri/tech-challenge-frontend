import { Link, useParams } from 'react-router-dom';
import { useTrackingDetails } from '../../hooks/api/useTrackingDetails';
import { ActorsDetails, DetailsContainer } from './TrackingDetailsStyle';
import { Container } from '../home/HomeStyle';
import StatusList from '../detailStatus/StatusList';
import ErrorMessage from '../errorMessage/ErrorMessage';

export default function TrackingDetails() {
	const { id } = useParams();
	const { tracking, detailsError, detailsLoading } = useTrackingDetails(id);
	console.log(tracking);

	return (
		<>
			<Link to={'../'}>{'Buscar Rastreios'}</Link>
			<Container>
				{
					detailsError ?
						detailsError.response.status === 404 ?
							<ErrorMessage message={'Lamentamos! Rastreio não encontrado!'}/>
							: <></>
						:
						tracking ?
							<DetailsContainer>
								<ActorsDetails>
									<div>
										<p>{`Embarcador: ${tracking.shipper.fantasia}`}</p>
										{
											tracking.shipper.cnpj && <p>{`CNPJ: ${tracking.shipper.cnpj}`}</p>
										}
										<p>{`Transportador: ${tracking.carrier.fantasia}`}</p>
										{
											tracking.shipper.cnpj && <p>{`CNPJ: ${tracking.carrier.cnpj}`}</p>
										}
									</div>
									<div>
										<p>{`Destinatário: ${tracking.customer.name}`}</p>
										<p>{`Endereço: ${tracking.address.street}`}</p>
										<p>{`CEP: ${tracking.address.cep}`}</p>
										<p>{`Estado: ${tracking.address.state}`}</p>
									</div>
								</ActorsDetails>
								<div>
									<StatusList statusList={tracking.trackingStatus}/>
								</div>
							</DetailsContainer>
							: detailsLoading && <p>Carregando...</p>
				}
			</Container>
		</>
	);
}