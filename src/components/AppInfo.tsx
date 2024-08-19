import React from "react";
import AppMetadata from "@/types/AppMetadata";
import Image from "next/image";
import Chip from "@/components/Chip";
import Ratings from "@/components/Ratings";
import Link from "next/link";

export default function AppInfo({ metadata }: { metadata: AppMetadata }) {
  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      <div className="flex gap-4 sm:mb-2">
        <div className="relative overflow-hidden rounded-lg w-24 h-24 bg-zinc-900">
          <Image src={metadata.icon} fill={true} alt={metadata.icon} />
        </div>
        <div className="flex flex-col gap-0.5 sm:py-1">
          <h3 className="text-xl md:text-3xl font-semibold">{metadata.name}</h3>
          <Link
            href={metadata.developer.url}
            className="text-base dark:text-hs-500"
          >
            {metadata.developer.name}
          </Link>
          <div className="flex text-sm sm:items-center gap-0.5 sm:gap-1.5 flex-col sm:flex-row dark:text-zinc-400">
            <span className="flex gap-1.5">
              {metadata.ratings.average.toFixed(1)}
              <Ratings height={16} value={metadata.ratings.average} />
            </span>
            <span>
              {"("}
              {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
                metadata.ratings.count
              )}
              {" Ratings)"}
            </span>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-col-reverse sm:flex-row">
        <div className="flex gap-2 items-center">
          {metadata.categories.map((category) => (
            <Chip
              key={category}
              href={`/categories/${category.replace(/\s+/g, "-")}`}
            >
              {category}
            </Chip>
          ))}
        </div>
        <div className="flex gap-2 items-center">
          <span className="hidden sm:inline">•</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -960 960 960"
            className="size-5 fill-current sm:hidden mb-0.5"
          >
            <path d="m720-80 120-120-28-28-72 72v-164h-40v164l-72-72-28 28L720-80ZM480-800 243-663l237 137 237-137-237-137ZM120-321v-318q0-22 10.5-40t29.5-29l280-161q10-5 19.5-8t20.5-3q11 0 21 3t19 8l280 161q19 11 29.5 29t10.5 40v159h-80v-116L479-434 200-596v274l240 139v92L160-252q-19-11-29.5-29T120-321ZM720 0q-83 0-141.5-58.5T520-200q0-83 58.5-141.5T720-400q83 0 141.5 58.5T920-200q0 83-58.5 141.5T720 0ZM480-491Z" />
          </svg>
          <span>
            {new Intl.NumberFormat("en-US", { notation: "compact" }).format(
              metadata.downloads
            )}{" "}
            Downloads
          </span>
        </div>
      </div>
    </div>
  );
}
