import AppItemCard from "@/components/AppItemCard";
import AppList from "@/components/AppList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
      <main className="min-h-screen pb-12 flex flex-col md:flex-row">
        <section className="flex-1"></section>
        <aside>
          <AppList className="md:flex-col md:mt-36">
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
