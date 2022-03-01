import styled from "styled-components";

export const StyledContainerToast = styled.div`
  background-color: ${({ type }) => (type === "error" ? "#f44336" : "#4caf50")};

  padding: 0.5rem;

  position: fixed;
  top: 0.5rem;
  right: 0.5rem;
  z-index: 9;
  min-width: "280px";

  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background-color: transparent;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: 400;
      line-height: 1;
      cursor: pointer;
      border: none;
      color: #fff;
    }
  }
`;
