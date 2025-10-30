import NavbarLayout from "../layouts/features/NavbarLayout";

export default function DashboardPage() {
  const isLogin = localStorage.getItem("isLogin") === "true";
  return (
    <>
      <NavbarLayout />
      {isLogin ? <h1>login</h1> : <h1>belum login</h1>}
    </>
  );
}
