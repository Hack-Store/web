"use client";
import React, { useEffect, useCallback, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Screenshot } from "@/types/AppMetadata";
import Image from "next/image";

export function ScreenshotCarousel({
  screenshots,
}: {
  screenshots: Screenshot[] | [];
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    dragFree: true,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const previous = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const next = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi, setCurrentIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, setScrollSnaps, onSelect]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className="relative mx-6 md:mx-16 mt-16 flex flex-col gap-4">
      <div className="viewport overflow-hidden" ref={emblaRef}>
        <div className="h-60 w-full flex">
          {screenshots.map((screenshot) => {
            return (
              <div
                className="mr-5 relative h-full flex-[0_0_max-content] w-fit rounded-lg bg-zinc-800 overflow-hidden"
                key={screenshot.url}
              >
                <Image
                  src={screenshot.url}
                  fill={true}
                  alt={screenshot.caption ?? ""}
                  title={screenshot.caption ?? ""}
                  className="h-full w-auto !static"
                />
              </div>
            );
          })}
        </div>
      </div>
      <button
        onClick={previous}
        className={`hidden ${
          prevBtnDisabled ? "hidden" : "md:flex"
        } absolute top-[50%] -left-6 transform -translate-y-9 rounded-full w-12 h-12 p-2 ring-1 ring-zinc-800 shadow-md dark:bg-zinc-900 justify-center items-center`}
      >
        <svg
          className="h-5 fill-current transform -translate-x-0.5"
          viewBox="0 0 10 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.768 16.89C10.122 16.466 10.064 15.835 9.64 15.482C7.995 14.105 4.175 10.72 2.866 8.99999C4.197 7.25099 7.966 3.91499 9.64 2.51799C10.064 2.16499 10.122 1.53399 9.768 1.10999C9.415 0.684991 8.784 0.627991 8.359 0.981991C6.52 2.51399 2.56 5.97499 1.159 7.94599C0.94 8.25799 0.75 8.60999 0.75 8.99999C0.75 9.38999 0.94 9.74199 1.159 10.053C2.532 11.985 6.558 15.515 8.359 17.017L8.36 17.018C8.784 17.372 9.415 17.314 9.768 16.89Z"
          />
        </svg>
      </button>
      <button
        onClick={next}
        className={`hidden ${
          nextBtnDisabled ? "hidden" : "md:flex"
        } absolute top-[50%] -right-6 transform -translate-y-9 rounded-full w-12 h-12 p-2 ring-1 ring-zinc-800 shadow-md dark:bg-zinc-900 justify-center items-center`}
      >
        <svg
          className="h-5 fill-current"
          viewBox="0 0 17 30"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0.718586 28.8075C0.0990856 28.0655 0.200584 26.9613 0.942584 26.3435C3.82133 23.9338 10.5063 18.01 12.7971 15C10.4678 11.9393 3.87208 6.10129 0.942584 3.65654C0.200584 3.03879 0.0990856 1.93454 0.718586 1.19254C1.33634 0.448795 2.44058 0.349045 3.18433 0.968545C6.40258 3.64955 13.3326 9.7063 15.7843 13.1555C16.1676 13.7015 16.5001 14.3175 16.5001 15C16.5001 15.6825 16.1676 16.2985 15.7843 16.8428C13.3816 20.2238 6.33608 26.4013 3.18433 29.0298L3.18259 29.0315C2.44059 29.651 1.33634 29.5495 0.718586 28.8075Z"
          />
        </svg>
      </button>
      <div className="flex items-center justify-center gap-2">
        {scrollSnaps.length > 1 &&
          scrollSnaps.map((_, key) => (
            <button
              className={`w-2 h-2 rounded-full ${
                key === currentIndex ? "dark:bg-hs-500" : "bg-zinc-700"
              }`}
              key={key}
              onClick={() => scrollTo(key)}
            />
          ))}
      </div>
    </div>
  );
}
