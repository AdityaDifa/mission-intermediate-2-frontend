type TNormalButton = {
  label: string;
  color: string;
};

export function NormalButton({ label, color }: TNormalButton) {
  const colors = {
    green: {
      button: "bg-[#3ECF4C] rounded-[10px] px-[26px] py-[10px] w-fit",
      text: "text-[14px] md:text-base md:font-bold text-white",
    },
  } as const;
  const style = colors[color as keyof typeof colors] || colors.green;
  return (
    <button className={style.button}>
      <p className={style.text}>{label}</p>
    </button>
  );
}
