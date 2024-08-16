import AppItemCard from "@/components/AppItemCard";
import AppList from "@/components/AppList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ParagraphSection from "@/components/ParagraphSection";
import ReviewItem from "@/components/ReviewItem";

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
  return (
    <>
      <Header />
      <main className="min-h-screen pb-12 flex flex-col lg:flex-row">
        <section className="flex-1">
          <ParagraphSection title="About">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
              voluptatum, quod voluptate tenetur odio non velit quos nam totam
              hic natus quidem dicta eaque? Necessitatibus officiis sint enim
              fugiat minus.
            </p>
          </ParagraphSection>
          <ParagraphSection title="What's New">
            Nothing New. come back later lol
          </ParagraphSection>
          <ParagraphSection title="Reviews">
            <div className="flex flex-col gap-8">
              <ReviewItem name="Jane Doe" createdAt={new Date()} ratings={4.5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eveniet, animi omnis ipsa expedita quis est mollitia velit iure
                molestiae. Quisquam placeat officia atque asperiores qui ab
                dolorum ut! Neque.
              </ReviewItem>
              <ReviewItem name="John Doe" createdAt={new Date()} ratings={5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eveniet, animi omnis ipsa expedita quis est mollitia velit iure
                molestiae. Quisquam placeat officia atque asperiores qui ab
                dolorum ut! Neque.
              </ReviewItem>
              <ReviewItem name="Jane Doe" createdAt={new Date()} ratings={2.5}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                eveniet, animi omnis ipsa expedita quis est mollitia velit iure
                molestiae. Quisquam placeat officia atque asperiores qui ab
                dolorum ut! Neque.
              </ReviewItem>
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
