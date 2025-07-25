export const Theme = ({ toggleTheme, localValue }) => {
  return (
    <div className="flex content-center items-center">
      <span className="text-3xl mr-2">🌞</span>
      <label className="relative inline-block w-[60px] h-[34px]">
        <input
          onChange={toggleTheme}
          className="opacity-0 w-0 h-0 peer"
          type="checkbox"
          id="theme-toggle"
          checked={localValue.isChecked}
        />
        <span className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-neutral-200 transition-[.4s] rounded-[34px] before:absolute before:content-[''] before:h-6.5 before:w-6.5 before:left-1 before:bottom-1 before:bg-white before:transition-[.4s] before:rounded-[50%] peer-checked:bg-blue-400 peer-checked:before:translate-x-[26px]"></span>
      </label>
      <span className="text-3xl ml-2">🌛</span>
    </div>
  );
};
