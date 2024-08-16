import AppItemCard from "@/components/AppItemCard";
import AppList from "@/components/AppList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ParagraphSection from "@/components/ParagraphSection";

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
            No Reviews. Be the first one to review this app.
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
