import styled from 'styled-components';

export const FormStyle = styled.form`
  width: 250px;
  height: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 10px;
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  font-weight: 500;
  gap: 10px;
  :nth-child(1) {
    margin-bottom: 10px;
  }
`;

export const FormInput = styled.input`
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
`;

export const ButtonAdd = styled.button`
  margin-top: 35px;
  margin-left: auto;
  margin-right: auto;
  padding: 10px 30px;
  background-color: #ebfbfd;
  border: 1px solid black;
  border-radius: 5px;

  :hover,
  :focus {
    background-color: #a3ced6;
  }
`;
