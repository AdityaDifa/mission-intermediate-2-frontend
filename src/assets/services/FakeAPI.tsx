import DB from "./fakeAccountDB.json";
function GET_ALL() {
  return DB;
}

type TAuthentification = {
  email: string;
  password: string;
};
function Authentification({ email, password }: TAuthentification) {
  const accounts: TAuthentification[] = GET_ALL();
  const check: any = accounts.find(
    (account) => account.email === email && account.password === password
  );
  return Boolean(check);
}

export { GET_ALL, Authentification };
