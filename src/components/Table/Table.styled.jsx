import styled from 'styled-components';

export const TableStyled = styled.table`
  border: 1px solid black;
  margin-left: 30px;
  border-collapse: collapse;
`;

export const TableTh = styled.th`
  border: 1px solid black;
  padding: 10px;
`;

export const TableTd = styled.td`
  border: 1px solid black;
  padding: 10px;
`;

export const ButtonDelete = styled.button`
  border: none;
  background-color: transparent;

  :hover,
  :focus {
    color: red;
  }
`;

export const Status = styled.span`
  color: ${({ status }) => (status === 'no' ? 'red' : 'green')};
`;
