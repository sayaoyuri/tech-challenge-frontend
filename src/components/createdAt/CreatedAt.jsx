import { formatDate } from '../../utils';

export default function CreatedAt({ date }) {
	const parsedDate = formatDate(date);

	return (
		<p>{`Criado em: ${parsedDate}`}</p>
	);
}