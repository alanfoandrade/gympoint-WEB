import styled from 'styled-components';

export const FormContainer = styled.div`
  form {
    background: #fff;
    margin-top: 41px;
    border-radius: 4px;
    padding: 9px 30px 10px;
    display: flex;
    flex-direction: column;

    label {
      color: #444;
      font-weight: bold;
      font-size: 14px;
      margin-bottom: 20px;

      p {
        margin-bottom: 8px;
      }

      input {
        width: 100%;
        border: 1px solid #ddd;
        padding: 15px 13px;
        border-radius: 4px;
        font-size: 16px;

        &::placeholder {
          color: #999;
        }
      }
    }

    div {
      display: flex;
      justify-content: space-between;

      > label {
        width: 32%;
      }
    }
  }
`;
