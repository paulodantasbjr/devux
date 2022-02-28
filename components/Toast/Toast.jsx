export const Toast = ({ msg, handleShow, bgColor }) => {
  return (
    <div>
      <div>
        <strong>{msg.title}</strong>

        <button type="button" onClick={handleShow}>
          x
        </button>
      </div>

      <div>{msg.msg}</div>
    </div>
  );
};
