import { useEffect, useState } from "react";
import { LoginForm } from "@/components/custom/login-form.tsx";
import { refreshToken } from "@/service/login.ts";
import { setDefaultRequestToken } from "@/service/service.ts";
import App from "@/App.tsx";
import { v4 as uuid } from "uuid";

/**
 * The `Login` component handles user authentication and displays either the main application
 * or the login form based on the user's authentication status.
 *
 * - If the user is authenticated, the `App` component is rendered.
 * - If the user is not authenticated, the `LoginForm` component is displayed.
 *
 * The component also manages token refresh logic to ensure the user's session remains active.
 */
function Login() {
  const [authenticated, login] = useState(false);

  const token = localStorage.getItem("token");
  const refresh = localStorage.getItem("refresh");
  const expiration = Number(localStorage.getItem("token_expire"));

  /**
   * Attempts to refresh the user's token using the provided refresh token.
   * If successful, updates the local storage and sets the user as authenticated.
   *
   * @param refresh - The refresh token used to obtain a new access token.
   */
  const getTokenByRefresh = (refresh: string) => {
    refreshToken(refresh).then((response) => {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("refresh", response.data.refreshToken);
      localStorage.setItem("token_expire", response.data.expiresIn.toString());

      setDefaultRequestToken(response.data.token);
      login(true);
    });
  };

  useEffect(() => {
    initUUID();

    if (
      token !== null &&
      refresh !== null &&
      Date.now().valueOf() < expiration * 1000 - 1000 * 60 * 60
    ) {
      getTokenByRefresh(refresh);
    } else if (token !== null) {
      setDefaultRequestToken(token);
      login(true);
    }
  }, [expiration, refresh, token]);

  if (authenticated) {
    return <App></App>;
  } else {
    return <LoginForm setAuth={login} key="login"></LoginForm>;
  }
}

/**
 * Initializes a unique identifier (UUID) for the user if it does not already exist in local storage.
 * This UUID is used to uniquely identify the user across sessions.
 */
function initUUID() {
  const uuid2 = localStorage.getItem("uuid");

  if (!uuid2) {
    localStorage.setItem("uuid", uuid());
  }
}

export default Login;
