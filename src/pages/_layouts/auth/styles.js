import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  background: #fff;
  width: 360px;
  height: 448px;
  width: 100%;
  max-width: 360px;
  text-align: center;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  img {
    margin-top: 50px;
  }

  form {
    display: flex;
    flex-direction: column;

    margin-top: 30px;

    span {
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      color: #444444;
      margin-bottom: 4px;
    }

    input {
      background: #fff;
      border: 1px solid #dddddd;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      margin: 0 30px 15px;
    }

    button {
      background: #ee4d64;
      color: #fff;
      font-weight: bold;
      align-self: center;
      height: 45px;
      width: 300px;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
    }
  }
`;
