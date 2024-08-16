import React from "react";

export default function ParagraphSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mx-6 md:mx-16 pt-10 max-w-md">
      <h2 className="flex gap-1 items-center mb-4">
        <span className="text-xxl font-medium">{title}</span>
        <button className="group rounded-full p-2  dark:hover:bg-zinc-900 transition duration-200 ease">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            className="size-5 dark:stroke-zinc-600 group-hover:stroke-zinc-200"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </h2>
      <div className="text-base">{children}</div>
    </section>
  );
}
