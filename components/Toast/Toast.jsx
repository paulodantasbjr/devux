import { StyledContainerToast } from "./styled";

export const Toast = ({ msg, handleShow, type }) => {
  return (
    <StyledContainerToast type={type}>
      <div className="title">
        <strong>{msg.title}</strong>

        <button type="button" onClick={handleShow}>
          x
        </button>
      </div>

      <div className="description">{msg.msg}</div>
    </StyledContainerToast>
  );
};
