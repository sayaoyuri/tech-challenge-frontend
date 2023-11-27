import styled from 'styled-components';

export const StatusContainer = styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
`;

export const Status = styled.li`
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 1px solid black;
  border-radius: 7px;
  line-break: normal;
`;