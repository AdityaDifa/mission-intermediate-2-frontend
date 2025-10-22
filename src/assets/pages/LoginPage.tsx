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
        <form className="gap-[20px] md:gap-[24px] w-fill md:w-fit">
          <div className="w-full md:w-fit gap-[24px]">
            <div className="w-full gap-[12px] md:gap-[16px]">
              <p>
                E-Mail <span className="text-red-500">*</span>
              </p>
            </div>
          </div>
        </form>
      </AuthLayout>
    </>
  );
}
