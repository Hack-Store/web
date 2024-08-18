import React from "react";
import Link from "next/link";

export default function Chip({ children, href }: { children: React.ReactNode, href: string }) {
  return (
    <Link href={href} className="capitalize px-3 py-1 rounded-full ring-1 dark:ring-zinc-800 dark:bg-zinc-900 text-sm dark:text-zinc-50">
      {children}
    </Link>
  );
}
