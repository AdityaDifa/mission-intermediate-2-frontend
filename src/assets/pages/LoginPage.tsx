import AuthButton from "../components/buttons/AuthButton";
import InputComponent from "../components/inputs/InputComponent";
import AuthLayout from "../layouts/AuthLayout";
import NavbarLayout from "../layouts/NavbarLayout";

export default function LoginPage() {
  return (
    <>
      <NavbarLayout />
      <AuthLayout>
        <div className="gap-[10px] w-full">
          <h1 className="text-center">Masuk ke Akun</h1>
          <p className="text-center">
            Yuk, lanjutin belajarmu di videobelajar.
          </p>
        </div>
        <form className="gap-[20px] md:gap-[24px] w-full">
          <div className="w-full flex flex-col gap-[24px]">
            <div className="w-full gap-[12px] md:gap-[16px]">
              <p>
                E-Mail <span className="text-red-500">*</span>
              </p>
              <InputComponent id="email" />
            </div>
            <div className="w-full gap-[12px] md:gap-[16px]">
              <p>
                Kata Sandi <span className="text-red-500">*</span>
              </p>
              <InputComponent id="password" isPassword={true} />
            </div>
            <a href="">
              <p className="text-[#333333AD] text-end">Lupa Password?</p>
            </a>
            <div className="flex flex-col gap-[16px] w-full">
              <AuthButton label="Masuk" theme="primary" type="submit" />
              <AuthButton label="Daftar" theme="secondary" type="button" />
            </div>
            <div className="flex flex-row items-center">
              <div className="border-t border-[#F1F1F1] flex w-full"></div>
              <p className="mx-2">Atau</p>
              <div className="border-t border-[#F1F1F1] flex w-full"></div>
            </div>
            <AuthButton
              label="Masuk dengan Google"
              type="button"
              theme="google"
            />
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
