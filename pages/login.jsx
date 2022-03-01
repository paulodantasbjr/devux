import { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import Cookie from "js-cookie";

import { StyledContainerLogin } from "../styles/login/styled";
import { DataContext } from "../store/GlobalState";
import { postData } from "../utils/fetchData";

const Login = () => {
  const initialState = { email: "", password: "" };
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;

  const { state, dispatch } = useContext(DataContext);
  const { auth } = state;

  const router = useRouter();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    dispatch({ type: "NOTIFY", payload: {} });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("/login", userData);
    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    dispatch({ type: "NOTIFY", payload: { success: res.msg } });

    dispatch({
      type: "AUTH",
      payload: {
        token: res.access_token,
        user: res.user,
      },
    });

    Cookie.set("refreshtoken", res.refresh_token, {
      path: "api/accessToken",
      expires: 7,
    });

    localStorage.setItem("firstLogin", true);
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/dashboard");
  }, [auth, router]);

  return (
    <>
      <Head>
        <title>DEVUX - Login</title>
      </Head>

      <StyledContainerLogin>
        <h2>DevUX - Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <label htmlFor="password">Senha</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
        </form>
        <Link href="/register">
          <a>Cadastrar</a>
        </Link>
      </StyledContainerLogin>
    </>
  );
};

export default Login;
