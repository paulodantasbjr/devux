import { StyledContainerLayout } from "./styled";
import { Notify } from "../Notify/Notify";

export const Layout = ({ children }) => {
  return (
    <StyledContainerLayout>
      <Notify />

      {children}
    </StyledContainerLayout>
  );
};
