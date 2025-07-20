export const Header = () => {
  return (
    <header className="w-[100%] h-15 bg-blue-500/50 text-white px-5 flex items-center justify-between">
      <div>
        <a href="*" className="no-underline text-white font-extrabold text-3xl">
          UPC
        </a>
      </div>
      <label htmlFor="">
        <input type="checkbox" />
        <span></span>
      </label>
    </header>
  );
};
