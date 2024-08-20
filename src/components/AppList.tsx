import React from "react";

export default function AppList({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <section className="mx-6 md:mx-16 pt-10 md:pt-14">
      <h2 className="text-xxl font-medium mb-6">{title}</h2>
      <div className={`flex scroll-smooth gap-8 overflow-x-auto no-scrollbar pb-2 ${className}`}>
        {children}
      </div>
    </section>
  );
}
