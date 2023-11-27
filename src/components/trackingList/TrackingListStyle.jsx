import styled from 'styled-components';

export const List = styled.ul`
  width: 100%;
  height: 100%;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  border: 1px solid black;
`;

export const ListItem = styled.li`
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid black;
  border-radius: 7px;
`;