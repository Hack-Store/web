import AppInfo from "@/components/AppInfo";
import AppItemCard from "@/components/AppItemCard";
import AppList from "@/components/AppList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ParagraphSection from "@/components/ParagraphSection";
import ReviewItem from "@/components/ReviewItem";
import { ScreenshotCarousel } from "@/components/ScreenshotCarousel";
import { formatBytes } from "@/lib/utils";
import { Platform, ScreenshotSize } from "@/types/AppMetadata";

// Temperoraly added for static generation
// TODO: Remove this later
export async function generateStaticParams(): Promise<
  [{ package_id: string }]
> {
  return [
    {
      package_id: "com.mycoolapp",
    },
  ];
}

export default function Package({
  params,
}: {
  params: { package_id: string };
}) {
  const { package_id } = params;
  console.log(package_id);
  // TODO: Sample data, replace with actual data
  let appMetadata = {
    name: "My Cool App",
    id: "com.mycoolapp",
    size: 10000,
    platform: Platform.ANDROID,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet, animi omnis ipsa expedita quis est mollitia velit iure molestiae. Quisquam placeat officia atque asperiores qui ab dolorum ut! Neque.",
    changelog: "Nothing New. come back later lol",
    screenshots: [
      {
        url: "/placeholder.svg",
        caption: "Screenshot 1",
        type: ScreenshotSize.Wide,
      },
      {
        url: "/placeholder.svg",
        caption: "Screenshot 2",
        type: ScreenshotSize.Wide,
      },
      {
        url: "/placeholder.svg",
        caption: "Screenshot 3",
        type: ScreenshotSize.Wide,
      },
    ],
    icon: "/placeholder.svg",
    categories: ["Developer Tools", "Utilities"],
    ratings: {
      count: 13500,
      average: 4.5,
    },
    reviews: [
      {
        name: "Jane Doe",
        createdAt: new Date(),
        ratings: 4.5,
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet, animi omnis ipsa expedita quis est mollitia velit iure molestiae. Quisquam placeat officia atque asperiores qui ab dolorum ut! Neque.",
      },
      {
        name: "John Doe",
        createdAt: new Date(),
        ratings: 5,
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet, animi omnis ipsa expedita quis est mollitia velit iure molestiae. Quisquam placeat officia atque asperiores qui ab dolorum ut! Neque.",
      },
      {
        name: "Jane Doe",
        createdAt: new Date(),
        ratings: 2.5,
        content:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore eveniet, animi omnis ipsa expedita quis est mollitia velit iure molestiae. Quisquam placeat officia atque asperiores qui ab dolorum ut! Neque.",
      },
    ],
    downloads: 1000,
    developer: {
      name: "John Doe",
      url: "/developers/john-doe",
    },
  };
  return (
    <>
      <Header />
      <main className="min-h-screen pb-12 flex flex-col lg:flex-row">
        <section className="flex-1">
          <div className="mx-6 md:mx-16 pt-10 max-w-lg flex flex-col gap-4">
            <AppInfo metadata={appMetadata} />
            <div className="flex gap-3 items-center mt-2">
              <a
                href={`/download/${appMetadata.id}/${appMetadata.platform}`}
                className="button primary-button"
              >
                Download{" "}
                <span className="text-sm dark:text-zinc-200">
                  {"("}
                  {formatBytes(appMetadata.size * 1000)}
                  {")"}
                </span>
              </a>
              <button className="group h-fit rounded-full p-2 dark:hover:bg-zinc-900 transition duration-200 ease">
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 dark:fill-zinc-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.8648 21.75C17.0633 21.75 16.3813 21.4693 15.8188 20.9078C15.2563 20.3463 14.975 19.6645 14.975 18.8625C14.975 18.7292 15.0042 18.4958 15.0625 18.1625L8.1125 14.1125C7.85417 14.3542 7.55533 14.5458 7.216 14.6875C6.8765 14.8292 6.51283 14.9 6.125 14.9C5.32633 14.9 4.6475 14.6195 4.0885 14.0585C3.5295 13.4975 3.25 12.8163 3.25 12.0148C3.25 11.2133 3.5295 10.5292 4.0885 9.9625C4.6475 9.39583 5.32633 9.1125 6.125 9.1125C6.51667 9.1125 6.87992 9.18108 7.21475 9.31825C7.54975 9.45558 7.84483 9.64533 8.1 9.8875L15.0625 5.8355C15.0292 5.72017 15.0063 5.60833 14.9938 5.5C14.9813 5.39167 14.975 5.27083 14.975 5.1375C14.975 4.33533 15.2555 3.65358 15.8165 3.09225C16.3775 2.53075 17.0587 2.25 17.8602 2.25C18.6617 2.25 19.3438 2.53075 19.9062 3.09225C20.4688 3.65358 20.75 4.33533 20.75 5.1375C20.75 5.943 20.4693 6.62775 19.9078 7.19175C19.3464 7.75558 18.6647 8.0375 17.8625 8.0375C17.4747 8.0375 17.1111 7.96667 16.7718 7.825C16.4324 7.68333 16.1335 7.4875 15.875 7.2375L8.925 11.2875C8.95833 11.4125 8.98125 11.5312 8.99375 11.6438C9.00625 11.7563 9.0125 11.878 9.0125 12.009C9.0125 12.14 9.00833 12.2587 9 12.3652C8.99167 12.4717 8.97083 12.5828 8.9375 12.6985L15.875 16.7625C16.1335 16.5125 16.4324 16.3167 16.7718 16.175C17.1111 16.0333 17.4747 15.9625 17.8625 15.9625C18.6647 15.9625 19.3464 16.2438 19.9078 16.8065C20.4693 17.3693 20.75 18.0527 20.75 18.8565C20.75 19.6605 20.4695 20.3438 19.9085 20.9062C19.3475 21.4688 18.6663 21.75 17.8648 21.75ZM17.8625 19.875C18.1493 19.875 18.3898 19.778 18.584 19.584C18.778 19.3898 18.875 19.1493 18.875 18.8625C18.875 18.5792 18.778 18.3375 18.584 18.1375C18.3898 17.9375 18.1493 17.8375 17.8625 17.8375C17.5757 17.8375 17.3352 17.9375 17.141 18.1375C16.947 18.3375 16.85 18.5792 16.85 18.8625C16.85 19.1458 16.947 19.3854 17.141 19.5813C17.3352 19.7771 17.5757 19.875 17.8625 19.875ZM6.125 13.025C6.40833 13.025 6.64792 12.928 6.84375 12.734C7.03958 12.5398 7.1375 12.2993 7.1375 12.0125C7.1375 11.7292 7.0405 11.4875 6.8465 11.2875C6.65233 11.0875 6.41183 10.9875 6.125 10.9875C5.84167 10.9875 5.60417 11.0875 5.4125 11.2875C5.22083 11.4875 5.125 11.7292 5.125 12.0125C5.125 12.2958 5.22083 12.5354 5.4125 12.7312C5.60417 12.9271 5.84167 13.025 6.125 13.025ZM17.8625 6.1625C18.1493 6.1625 18.3898 6.0625 18.584 5.8625C18.778 5.6625 18.875 5.42083 18.875 5.1375C18.875 4.85417 18.778 4.61458 18.584 4.41875C18.3898 4.22292 18.1493 4.125 17.8625 4.125C17.5757 4.125 17.3352 4.222 17.141 4.416C16.947 4.61017 16.85 4.85067 16.85 5.1375C16.85 5.42083 16.947 5.6625 17.141 5.8625C17.3352 6.0625 17.5757 6.1625 17.8625 6.1625Z" />
                </svg>
              </button>
              <button className="group h-fit rounded-full p-2 dark:hover:bg-zinc-900 transition duration-200 ease">
                <svg
                  viewBox="0 0 24 24"
                  className="size-6 dark:fill-zinc-50"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.19995 20.7375V5.13745C5.19995 4.62178 5.38353 4.18037 5.7507 3.8132C6.11787 3.44604 6.55928 3.26245 7.07495 3.26245H16.925C17.4406 3.26245 17.882 3.44604 18.2492 3.8132C18.6164 4.18037 18.8 4.62178 18.8 5.13745V20.7375L12 17.8375L5.19995 20.7375ZM7.07495 17.8875L12 15.7625L16.925 17.8875V5.13745H7.07495V17.8875Z" />
                </svg>
              </button>
            </div>
          </div>
          <ScreenshotCarousel screenshots={appMetadata.screenshots} />
          <ParagraphSection title="About">
            <p>{appMetadata.description}</p>
          </ParagraphSection>
          <ParagraphSection title="What's New">
            <p>{appMetadata.changelog}</p>
          </ParagraphSection>
          <ParagraphSection title="Reviews">
            <div className="flex flex-col gap-8">
              {appMetadata.reviews.map((review, i) => (
                <ReviewItem
                  key={i}
                  name={review.name}
                  createdAt={review.createdAt}
                  ratings={review.ratings}
                >
                  {review.content}
                </ReviewItem>
              ))}
            </div>
            <button className="dark:text-hs-400 flex items-center gap-2 mt-3">
              <span>See All Reviews</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
                className="size-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </button>
          </ParagraphSection>
        </section>
        <aside className="lg:pt-32">
          <AppList title="Similar Apps" className="lg:flex-col">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <AppItemCard
                  key={i}
                  src="/placeholder.svg"
                  name="My Cool App"
                  ratings={4.5}
                  href="/package/com.mycoolapp"
                />
              ))}
          </AppList>
        </aside>
      </main>
      <Footer />
    </>
  );
}
