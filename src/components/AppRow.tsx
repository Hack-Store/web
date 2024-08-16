import React from "react";
import AppItemCard from "./AppItemCard";

export default function AppRow({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="mx-6 md:mx-16 pt-10 md:pt-14">
      <h2 className="text-xxl font-medium mb-6">{title}</h2>
      <div className="flex gap-8 overflow-x-auto scroll-m-2 pb-2">
        {children}
      </div>
    </section>
  );
}
