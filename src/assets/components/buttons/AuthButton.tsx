type TAuthButton = {
  theme: "primary" | "secondary";
  label: string;
  type: "submit" | "reset" | "button" | undefined;
  action?: () => void;
};
const style: string[] = [
  "bg-[#3ECF4C] text-white",
  "bg-[#E2FCD9CC] text-[#3ECF4C]",
];
export default function AuthButton({
  theme,
  label,
  type,
  action,
}: TAuthButton) {
  return (
    <button
      onClick={action}
      type={type}
      className={`w-full rounded-[10px] text-[14px] md:text-[16px] font-bold font-DMSans h-[34px] md:h-[42px] ${
        theme === "primary" ? style[0] : style[1]
      }`}
    >
      {label}
    </button>
  );
}
