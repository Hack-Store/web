"use client";
import Logo from "@/components/Logo";

export default function Header() {
  return (
    <header className="select-none w-full flex justify-between items-center gap-3 px-4 border-b border-zinc-800">
      <Logo width={64} height={64} />
      <div className="flex gap-3">
        <form action="#">
          <label
            className="flex items-center px-3 gap-2 rounded-full ring-1 dark:ring-zinc-800 dark:focus-within:ring-zinc-700 w-full max-w-sm"
            htmlFor="search"
          >
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search"
              autoComplete="off"
              className="peer w-full p-2 rounded-md dark:placeholder-zinc-400 flex-1 appearance-none bg-transparent outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              strokeWidth={1.6}
              className="dark:stroke-zinc-50 size-4 fill-none peer-placeholder-shown:block hidden"
            >
              <path
                d="M14 14L11.1 11.1M12.6667 7.33333C12.6667 10.2789 10.2789 12.6667 7.33333 12.6667C4.38781 12.6667 2 10.2789 2 7.33333C2 4.38781 4.38781 2 7.33333 2C10.2789 2 12.6667 4.38781 12.6667 7.33333Z"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <button className="peer-placeholder-shown:hidden" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth={1.6}
                className="dark:stroke-zinc-50 size-4 fill-none"
              >
                <path
                  d="M6 18 18 6M6 6l12 12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </label>
        </form>
        <nav className="hidden lg:flex items-center gap-2">
          {[
            "apps",
            "games",
            "tools",
            "entertainment",
            "productivity",
            "lifestyle",
          ].map((item) => {
            // TODO: write current tab getter
            let currentTab = "apps";

            return (
              <a
                key={item}
                href={`#${item}`}
                className={`h-8 leading-8 text-black rounded-lg transition duration-2000 ease align-middle capitalize dark:text-white px-2 ${
                  item === currentTab
                    ? "bg-hs-500 text-white dark:hover:bg-hs-500"
                    : "dark:hover:bg-zinc-800"
                }`}
              >
                <span>{item}</span>
              </a>
            );
          })}
        </nav>
        <div className="gap-3 hidden sm:flex">
          <button onClick={function() {}} className="button outline-button">
            Sign in
          </button>
          <button onClick={function() {}} className="button primary-button">
            Register
          </button>
        </div>
      </div>
    </header>
  );
}
