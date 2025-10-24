type TInputTelpFlagComponent = {
  id: string;
  value: string;
  setValue: (newValue: string) => void;
};

export default function InputTelpFlagComponent({
  id,
  value,
  setValue,
}: TInputTelpFlagComponent) {
  return (
    <div className="flex border-[#3A35411F] rounded-[6px] w-full">
      <div className="basis-1/4 bg-[#F4F5FA] border-r border-r-[#3A35411F] px-[10px] py-[4px]">
        <div></div>
      </div>
      <div className="basis-3/4 w-full">
        <select
          className="w-full"
          name="phoneId"
          id={id}
          value={value}
        ></select>
      </div>
    </div>
  );
}
