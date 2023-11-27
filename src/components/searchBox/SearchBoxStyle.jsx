import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const SearchInput = styled.input`
  height: 40px;
  text-align: center;
  font-size: 20px;
`;

export const SearchButton = styled.button`
  background-color: lightgreen;
  padding: 5px 15px;
  color: black;
  border: none;
  border-radius: 7px;
  font-size: 20px;
  cursor: ${props => props.loading ? 'wait' : 'pointer'};

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }
`;