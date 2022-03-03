import styled from "styled-components";

export const StyledContainerHome = styled.main`
  width: 100%;
  height: 100%;
`;

export const StyledMainContentHome = styled.div`
  display: flex;

  .content_one {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content_two {
    width: 100%;
    height: calc(100vh - 12rem);

    flex: 1;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #eeebea;
  }
`;
