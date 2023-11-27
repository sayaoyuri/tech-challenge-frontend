import { SearchButton, SearchContainer, SearchInput } from './SearchBoxStyle';

export default function SearchBox({ searchValue, setSearchValue, getTrackings, trackingsLoading}) {
	function handleInput(eventValue) {
		const parsedValue = eventValue.replace(/\D/g, '');
		setSearchValue(parsedValue);
	}

	return (
		<SearchContainer>
			<SearchInput 
				type="search"
				placeholder="Informe seu CPF"
				minLength={11}
				maxLength={11}
				required
				disabled={trackingsLoading}
				value={searchValue}
				onChange={(ev) => handleInput(ev.target.value)}
			/>
			<SearchButton
				disabled={searchValue.length !== 11 || trackingsLoading}
				loading={trackingsLoading}
				onClick={() => getTrackings()}
			>
        Pesquisar
			</SearchButton>
		</SearchContainer>
	);
}