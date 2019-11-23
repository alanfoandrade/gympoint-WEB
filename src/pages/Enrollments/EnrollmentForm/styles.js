import styled from 'styled-components';

export const FormContainer = styled.div`
  form {
    background: #fff;
    margin-top: 41px;
    border-radius: 4px;
    padding: 9px 30px 10px;
    /* display: flex;
    flex-direction: column; */
    label {
      font-size: 14px;
      color: #444;
      font-weight: bold;
      margin-bottom: 8px;
    }
    input {
      border-radius: 4px;
      border: 1px solid #ddd;
      width: 100%;
    }
  }

  button {
    background: #de3b3b;
    font-size: 14px;
    font-weight: bold;
    padding: 10px 16px;
    color: #fff;
    border: 0;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-right: 16px;
  }
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  margin-top: 15px;
  div {
    input {
      height: 45px;
      text-indent: 15px;
    }
  }
  div.react-datepicker-wrapper {
    width: 100%;
  }
  > div#plansSelect {
    input {
      max-height: 32px;
    }
  }
`;
