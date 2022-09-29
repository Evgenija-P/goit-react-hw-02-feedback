import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 30px;
  gap: 25px;
  padding-top: 30px;
  color: #010101;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #010101;
`;

export const Button = styled.button`
  font-size: 20px;
  font-weight: 500;
  width: 90px;
  height: 30px;
  border: 1px solid grey;
  border-radius: 4px;
  box-shadow: 2px 8px 11px -2px rgba(0, 0, 0, 0.75);
  outline: none;
`;
