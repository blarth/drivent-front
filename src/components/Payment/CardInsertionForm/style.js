import styled from 'styled-components';

export const Box = styled.div`
  padding: 30px 0 40px 0;
`;

export const CardInfos = styled.div`
  display: flex;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  input {
    height: 42px;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 15px;
  }

  p {
    color: gray;
  }

  div {
    display: flex;
    gap: 20px;
  }
`;
