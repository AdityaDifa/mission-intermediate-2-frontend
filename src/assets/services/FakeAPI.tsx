import DB from "./fakeAccountDB.json";
function GET_ALL() {
  if (!localStorage.getItem("accounts")) {
    localStorage.setItem("accounts", JSON.stringify(DB));
  }
  return JSON.parse(localStorage.getItem("accounts") || "[]");
}

type TAuthentification = {
  email: string;
  password: string;
  fullname?: string;
  phone?: string;
};
function Authentification({ email, password }: TAuthentification) {
  const accounts: TAuthentification[] = GET_ALL();
  const check: any = accounts.find(
    (account) => account.email === email && account.password === password
  );
  return Boolean(check);
}

export { GET_ALL, Authentification };
