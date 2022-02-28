import { Notify } from "../Notify/Notify";

export const Layout = ({ children }) => {
  return (
    <div className="container">
      <Notify />
      {children}
    </div>
  );
};
