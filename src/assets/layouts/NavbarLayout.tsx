import { useLocation } from "react-router-dom";
import logo from "../images/Logo.png";

function AuthNav() {
  const isLogin: boolean = localStorage.getItem("isLogin") === "true" || false;
  return <></>;
}

export default function NavbarLayout() {
  const { pathname } = useLocation();
  const inAuthPage: boolean = pathname === "/login" || pathname === "/register";
  return (
    <header className="w-full h-[74px] md:h-[80px] bg-white flex justify-between border-y md:border-t-0 border-y-[#F1F1F1] px-[24px] py-[16px] md:px-[120px] md:py-[12px] shadow-[#3E434A4F] shadow-md md:shadow-none z-10 relative">
      <img src={logo} alt="" className="w-[152px] md:w-fit" />
      {!inAuthPage && <AuthNav />}
    </header>
  );
}
