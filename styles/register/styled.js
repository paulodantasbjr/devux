import styled from "styled-components";

export const StyledContainerRegister = styled.div`
  width: 300px;

  padding: 2rem;
  border-radius: 0.5rem;

  box-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.2);

  h2 {
    font-size: 2.4rem;
    margin-bottom: 1rem;

    color: #5e548e;
  }

  form {
    width: 100%;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: column;

    label {
      margin-top: 1rem;
      font-size: 1.5rem;
      font-weight: 300;
    }

    input {
      width: 100%;
      padding: 0.5rem;
      margin-bottom: 1rem;
    }

    button {
      margin-top: 1rem;
      width: 100%;
      max-height: 70px;
      background: #5e548e;
      padding: 1rem 2rem;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 1.1rem;
      font-weight: 400;
      line-height: 1;
      cursor: pointer;
      border: none;
      color: #fff;
      transition: all 150ms ease-in-out;
      &:hover {
        background: #3392ff;
      }
    }
  }
  a {
    font-size: 1rem;
  }
`;
