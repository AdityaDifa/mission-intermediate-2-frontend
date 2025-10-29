import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../images/Logo.png";
import { useEffect, useState } from "react";
import dropdownIcon from "../images/icons/dropdown-icon.png";

export default function NavbarLayout() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const inAuthPage: boolean = pathname == "/Login" || pathname == "/Register";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function AuthNav() {
    const isLogin: boolean =
      localStorage.getItem("isLogin") === "true" || false;

    function handleLogout() {
      localStorage.setItem("isLogin", "false");
      navigate(0);
    }

    function MobileVIew() {
      return (
        <div className="relative">
          <img src={dropdownIcon} className="w-5" />
          <div className="absolute right-0 border p-2 bg-white w-25 flex flex-col gap-y-2">
            <a href="">
              <p>Kategori</p>
            </a>
            {isLogin ? (
              <>
                <a href="">
                  <p>Profile</p>
                </a>
                <p onClick={handleLogout}>Logout</p>
              </>
            ) : (
              <>
                <Link to="/Login">
                  <p>Login</p>
                </Link>
                <Link to="/Register">
                  <p>Register</p>
                </Link>
              </>
            )}
          </div>
        </div>
      );
    }

    function DeskopView() {
      return <></>;
    }
    return <>{isMobile ? <MobileVIew /> : <DeskopView />}</>;
  }

  return (
    <header className="w-full h-fit md:h-[80px] bg-white flex justify-between items-center border-y md:border-t-0 border-y-[#F1F1F1] px-[24px] py-[16px] md:px-[120px] md:py-[12px] shadow-[#3E434A4F] shadow-md md:shadow-none z-10 relative">
      <img src={logo} alt="" className="w-[152px] md:w-fit" />
      {!inAuthPage && <AuthNav />}
    </header>
  );
}
