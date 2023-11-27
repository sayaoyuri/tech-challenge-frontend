import { ErrorParagraph } from './ErrorMessageStyle';

export default function ErrorMessage({ message }) {
	return (
		<ErrorParagraph>{message}</ErrorParagraph>
	);
}