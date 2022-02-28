import { useState, useContext, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";

import valid from "../../utils/valid";

import { DataContext } from "../../store/GlobalState";
import { postData } from "../../utils/fetchData";

import { StyledContainerRegister } from "./styled";

const register = () => {
  const initialState = { name: "", email: "", password: "", cf_password: "" };
  const [userData, setUserData] = useState(initialState);
  const { name, email, password, cf_password } = userData;

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
    const errMsg = valid(name, email, password, cf_password);
    if (errMsg) return dispatch({ type: "NOTIFY", payload: { error: errMsg } });

    dispatch({ type: "NOTIFY", payload: { loading: true } });

    const res = await postData("/register", userData);

    if (res.err)
      return dispatch({ type: "NOTIFY", payload: { error: res.err } });

    return dispatch({ type: "NOTIFY", payload: { success: res.msg } });
  };

  useEffect(() => {
    if (Object.keys(auth).length !== 0) router.push("/dashboard");
  }, [auth]);

  return (
    <>
      <Head>
        <title>Register Page</title>
      </Head>
      <StyledContainerRegister>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChangeInput}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChangeInput}
          />
          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChangeInput}
          />
          <label htmlFor="cf_password">Confirme a senha</label>
          <input
            type="password"
            name="cf_password"
            value={cf_password}
            onChange={handleChangeInput}
          />
          <button type="submit">Registrar</button>
        </form>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </StyledContainerRegister>
    </>
  );
};

export default register;
