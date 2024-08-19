import React from "react";
import Image from "next/image";
import Ratings from "@/components/Ratings";

export default function ReviewItem({
  name,
  createdAt,
  ratings,
  children,
}: {
  name: string;
  createdAt: Date;
  ratings: number;
  children: React.ReactNode;
}) {
  return (
    <div className="ring-[1px] dark:ring-zinc-800 rounded-lg p-6">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full aspect-square bg-zinc-800"
            width={40}
            height={40}
            src="/placeholder.svg"
            alt=""
          />
          <div>
            <div className="flex items-center gap-1 leading-[14px] mt-[-6px]">
              <span className="truncate font-medium text-base dark:text-zinc-50">
                {name}
              </span>
              <span>•</span>
              <span className="text-sm dark:text-zinc-400 w-max">
                {new Intl.DateTimeFormat("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                }).format(createdAt)}
              </span>
            </div>
            <Ratings value={ratings} height={12} />
          </div>
        </div>
        <p className="text-base dark:text-zinc-50">
          {children}
        </p>
      </div>
    </div>
  );
}
