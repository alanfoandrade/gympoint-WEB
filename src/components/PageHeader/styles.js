import styled from 'styled-components';

export const PageHeader = styled.header`
  display: flex;
  justify-content: space-between;
  strong {
    font-size: 24px;
    font-weight: bold;
  }

  aside {
    display: flex;
    align-items: center;

    svg {
      margin-right: 16px;
    }

    a {
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
  }
`;
