import { StyledContainerDashboard } from "../styles/dashboard/styled";
import Cookie from "js-cookie";
import { useRouter } from "next/router";
import { DataContext } from "../store/GlobalState";
import { useContext } from "react";

const Dashboard = () => {
  const router = useRouter();

  const { _, dispatch } = useContext(DataContext);

  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/accessToken" });
    localStorage.removeItem("firstLogin");

    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Desconectado!" } });

    return router.push("/");
  };

  return (
    <StyledContainerDashboard>
      <h1>DashBoard</h1>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </StyledContainerDashboard>
  );
};

export default Dashboard;
