import { useState } from "react";
import InputComponent from "../components/inputs/InputComponent";
import AuthLayout from "../layouts/AuthLayout";
import NavbarLayout from "../layouts/NavbarLayout";
import InputGenderComponent from "../components/inputs/InputGenderComponent";
import InputTelpFlagComponent from "../components/inputs/InputTelpFlagComponent";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneFlag, setPhoneFlag] = useState("");
  const [gender, setGender] = useState("");
  return (
    <>
      <NavbarLayout />;
      <AuthLayout>
        <div className="flex flex-col items-center gap-[10px]">
          <h1>Pendaftaraan Akun</h1>
          <p>Yuk, daftarkan akunmu sekarang juga</p>
        </div>
        <div className="flex flex-col w-full rouded-[4px] border border-[#F1F1F1] p-[20px] md:p-[36px] md:gap-[36px] gap-[20px]">
          <form className="flex flex-col gap-[20px]">
            <div>
              <p>
                Nama Lengkap <span className="text-red-500">*</span>
              </p>
              <InputComponent
                id="fullname"
                setValue={setFullName}
                value={fullName}
              />
            </div>
            <div>
              <p>
                E-Mail <span className="text-red-500">*</span>
              </p>
              <InputComponent id="email" setValue={setEmail} value={email} />
            </div>
            <div>
              <p>
                Jenis Kelamin <span className="text-red-500">*</span>
              </p>
              <InputGenderComponent
                id="gender"
                value={gender}
                setValue={setGender}
              />
            </div>
            <div>
              <p>
                No. Hp <span className="text-red-500">*</span>
              </p>
              <div className="flex gap-2 items-center">
                <div className="basis-1/3 border border-[#3A35411F] md:h-[34px] h-[31px] rounded-[6px]">
                  <InputTelpFlagComponent
                    id="telpFlag"
                    value={phoneFlag}
                    setValue={setPhoneFlag}
                  />
                </div>
                <div className="basis-2/3">
                  <InputComponent
                    id="phone"
                    value={phone}
                    setValue={setPhone}
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </AuthLayout>
    </>
  );
}
