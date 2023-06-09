import jwt_decode from "jwt-decode";

//salva o token e os dados no local storage
export function tokenSaveData(token) {
  const decode = jwt_decode(token);

  localStorage.setItem("exp", decode.exp);
  localStorage.setItem("userId", decode.userId);
  localStorage.setItem("userName", decode.name);
  localStorage.setItem("token", token);
}

//para usar o token
export function useToken() {
  const token = typeof window !== "undefined" ? localStorage.token : "";
  return token;
}

//para usar o id do usuario
export function userId() {
  const userId = typeof window !== "undefined" ? localStorage.userId : "";
  return userId;
}

//para usar o nome do usuario
export function userName() {
  const userName = typeof window !== "undefined" ? localStorage.userName : "";
  return userName;
}

//quando o token expirar ou não existir
export function tokenExist() {
  const token = typeof localStorage !== "undefined" ? localStorage.token : null;

  if (!token) {
    return false;
  }

  const expTime = parseInt(localStorage.exp);
  const currentTime = Math.floor(Date.now() / 1000);

  if (expTime < currentTime) {
    localStorage.clear();
    return false;
  }

  return true;
}
