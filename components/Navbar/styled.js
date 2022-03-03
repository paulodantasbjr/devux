import styled from "styled-components";

export const StyledContainerNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    color: #000000;
  }

  h1 {
    font-size: 1.6rem;
    line-height: 2.2rem;
  }

  h3 {
    font-size: 1.4rem;
    line-height: 1.9rem;
  }

  .content_one {
    width: 100%;
    height: 12rem;

    flex: 1;

    background-color: #ffffff;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;
  }

  .content_two {
    width: 100%;
    height: 12rem;

    flex: 1;

    background-color: #eeebea;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4rem;

    button {
      background: #000000;
      color: #ffffff;
      border: none;
      border-radius: 0.4rem;

      font-weight: 800;
      font-size: 1.4rem;
      line-height: 1.9rem;

      padding: 0.8rem 1.2rem;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`;
