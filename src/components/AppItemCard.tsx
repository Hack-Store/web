import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AppItemCard({
  src,
  name,
  ratings,
  href,
}: {
  src: string;
  name: string;
  ratings: number;
  href: string;
}) {
  return (
    <Link className="flex flex-col gap-1" href={href}>
      <div className="relative w-40 aspect-square rounded-xl dark:bg-zinc-800">
        <Image src={src} fill={true} alt={name} className="rounded-xl"></Image>
      </div>
      <div className="flex flex-col gap-0.5">
        <h3 className="text-base font-medium truncate">{name}</h3>
        <div className="flex gap-1 items-center">
          <span className="text-sm leading-4 dark:text-zinc-200">
            {ratings}
          </span>
          <svg
            viewBox="0 0 12 13"
            className="size-4 dark:fill-zinc-200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.80615 3.95L5.20615 2.1375C5.30615 2.00417 5.4249 1.90625 5.5624 1.84375C5.6999 1.78125 5.84365 1.75 5.99365 1.75C6.14365 1.75 6.2874 1.78125 6.4249 1.84375C6.5624 1.90625 6.68115 2.00417 6.78115 2.1375L8.18115 3.95L10.3062 4.6625C10.5228 4.72917 10.6937 4.85208 10.8187 5.03125C10.9437 5.21042 11.0062 5.40833 11.0062 5.625C11.0062 5.725 10.9916 5.825 10.9624 5.925C10.9332 6.025 10.8853 6.12083 10.8187 6.2125L9.44365 8.1625L9.49365 10.2125C9.50199 10.5042 9.40615 10.75 9.20615 10.95C9.00616 11.15 8.77282 11.25 8.50615 11.25C8.48949 11.25 8.39782 11.2375 8.23115 11.2125L5.99365 10.5875L3.75615 11.2125C3.71449 11.2292 3.66865 11.2396 3.61865 11.2438C3.56865 11.2479 3.52282 11.25 3.48115 11.25C3.21449 11.25 2.98115 11.15 2.78115 10.95C2.58115 10.75 2.48532 10.5042 2.49365 10.2125L2.54365 8.15L1.18115 6.2125C1.11449 6.12083 1.06657 6.025 1.0374 5.925C1.00824 5.825 0.993652 5.725 0.993652 5.625C0.993652 5.41667 1.05407 5.22292 1.1749 5.04375C1.29574 4.86458 1.46449 4.7375 1.68115 4.6625L3.80615 3.95Z" />
          </svg>
        </div>
      </div>
    </Link>
  );
}
