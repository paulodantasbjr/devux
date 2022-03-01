import styled from "styled-components";

export const StyledContainerDashboard = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  h1 {
    font-size: 2.4rem;
  }
  button {
    width: 10rem;
    background: #5e548e;
    padding: 1rem 2rem;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
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
`;
