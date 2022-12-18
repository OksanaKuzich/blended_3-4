import styled from 'styled-components';

export const TableStyled = styled.table`
  border: 1px solid black;
  margin-top: 30px;
  border-collapse: collapse;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

export const TableTh = styled.th`
  border: 1px solid black;
  padding: 15px 35px;
`;

export const TableTd = styled.td`
  border: 1px solid black;
  padding: 6px 35px;
`;

export const ButtonDelete = styled.button`
  border: none;
  background-color: transparent;

  :hover,
  :focus {
    color: red;
    cursor: pointer;
  }
`;

export const Status = styled.span`
  color: ${({ status }) => (status === 'no' ? 'red' : 'green')};
  :hover,
  :focus {
    cursor: pointer;
  }
`;

export const NoResults = styled.div`
  font-size: 16px;
  font-style: italic;
  padding: 20px 0 0 40px;
`;
