import { paths } from "@/routes/paths";
import axios from "@/utils/axios";

function jwtDecode(token: string) {
  const base64Url = token.split(".")[1];
  console.log("base64URL : ", base64Url);

  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export const isValidToken = (accessToken: string) => {
  if (!accessToken) {
    return false;
  }

  const decode = jwtDecode(accessToken);

  const currentTime = Date.now() / 1000;

  return decode.exp > currentTime;
};

export const tokenExpired = (exp: number) => {
  let expiredTimer;

  const currentTime = Date.now();

  const timeLeft = exp * 1000 - currentTime;

  clearTimeout(expiredTimer);

  expiredTimer = setTimeout(() => {
    if (timeLeft <= 0) {
      alert("Token expired");

      sessionStorage.removeItem("accessToken");
      sessionStorage.removeItem("userId");

      window.location.href = paths.auth.login;
    } else {
      console.log("Time Left", timeLeft);
    }
  }, timeLeft);
};

export const setSession = (accessToken: string | null) => {
  if (accessToken) {
    sessionStorage.setItem("accessToken", accessToken);

    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;

    const { exp } = jwtDecode(accessToken);
    tokenExpired(exp);
  } else {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("userId");
    delete axios.defaults.headers.common.Authorization;
  }
};
