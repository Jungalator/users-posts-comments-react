import { Theme } from "./Theme/Theme";
export const Header = ({ toggleTheme, localValue }) => {
  return (
    <header className="w-[100%]  h-15 bg-blue-500/50 dark:bg-gray-900  text-white px-5 flex items-center justify-between">
      <div>
        <a
          href="*"
          className="no-underline text-white dark:text-blue-400 dark:text-shadow-md text-shadow-blue-400 font-extrabold text-3xl"
        >
          UPC
        </a>
      </div>
      <Theme toggleTheme={toggleTheme} localValue={localValue} />
    </header>
  );
};
