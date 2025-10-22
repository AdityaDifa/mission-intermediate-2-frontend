import hidePassword from "../../images/icons/hide-password.png";
import showPassword from "../../images/icons/view-password.png";

type TInputComponent = {
  id: string;
  isPassword?: boolean;
  value: string;
  setValue: (newValue: string) => void;
};

let isShow: boolean = false;
function togglePassword() {
  const inputElement: any = document.getElementById("password");
  const iconPassword: any = document.getElementById("iconShowPassword");
  if (isShow) {
    inputElement.type = "password";
    iconPassword.src = hidePassword;
    isShow = false;
  } else {
    inputElement.type = "text";
    iconPassword.src = showPassword;
    isShow = true;
  }
}

export default function InputComponent({
  id,
  isPassword = false,
  value,
  setValue,
}: TInputComponent) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type={isPassword ? "password" : "text"}
        id={id}
        className="w-full h-fit rounded-[6px] border border-[#3A35411F] py-[4px] pl-[10px] pr-[50px] text-[14px] md:text-[16px]"
      />
      {isPassword && (
        <img
          id="iconShowPassword"
          src={hidePassword}
          alt=""
          className="absolute w-[24px] right-5 top-[15%] opacity-50"
          onClick={togglePassword}
        />
      )}
    </div>
  );
}
