import dayjs from 'dayjs';

export function formatDate(date) {
	return dayjs(date).format('DD/MM/YYYY');
}
export function formatDateTime(date) {
	return dayjs(date).format('DD/MM/YYYY - HH:mm:ss');
}

export function parseStatus(status) {
	let parsedStatus = '';
  
	switch (status) {
	case 'EM_TRANSITO':
		parsedStatus = 'Em Trânsito';
		break;
	case 'CHEGOU_A_CIDADE_DE_DESTINO':
		parsedStatus = 'Chegou à Cidade de Destino';
		break;
	case 'CHEGOU_A_FILIAL_DA_CIDADE':
		parsedStatus = 'Chegou à Filial da Cidade';
		break;
	case 'SAIU_PARA_ENTREGA':
		parsedStatus = 'Saiu Para Entrega';
		break;
	case 'ENTREGA_REALIZADA':
		parsedStatus = 'Entrega Realizada';
		break;
	default:
		parsedStatus = 'Entrega Criada';
		break;
	}
	return parsedStatus;
}