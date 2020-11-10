import styled from 'styled-components';

export const Container = styled.header`
  background: #1e3e59;
  width: 100%;
  display: block;
  z-index: 2;

  button {
    border-color: transparent;
  }

  nav {
    display: flex;
    justify-content: space-between;
    background: #1e3e59;
    padding: 0px 10px;

    img {
      display: block;
      max-height: 80px;
    }

    > div {
      display: flex;
      align-items: center;
    }

    ul {
      display: flex;
      align-items: center;
      list-style: none;
      a {
        color: #fff;
        font-size: 1.5rem;
        padding: 0px 10px 0 10px;

        &.login {
          border: 1px solid #f24f13;
          border-radius: 10px;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          padding-top: 10px;
          padding-right: 15px;
          padding-bottom: 10px;
          padding-left: 15px;
        }
        img {
          max-width: 50px;
          display: block;
          padding-right: 10px;
        }
      }
    }
  }
`;
