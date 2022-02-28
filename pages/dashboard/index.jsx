import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { DataContext } from "../../store/GlobalState";
import { getData } from "../../utils/fetchData";

const dashboard = () => {
  const { state, dispatch } = useContext(DataContext);

  const router = useRouter();

  const privateRoute = Cookies.get("refreshtoken");

  useEffect(() => {
    if (privateRoute) {
      getData("/accessToken").then((res) => {
        if (res.err)
          return dispatch({ type: "NOTIFY", payload: { error: res.err } });

        dispatch({
          type: "AUTH",
          payload: {
            token: res.access_token,
            user: res.user,
          },
        });
      });
    } else {
      router.replace("/login");
    }
  }, [privateRoute]);

  return (
    <div>
      <h1>DashBoard</h1>
    </div>
  );
};

export default dashboard;
