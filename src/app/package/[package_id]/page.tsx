import AppItemCard from "@/components/AppItemCard";
import AppList from "@/components/AppList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Package() {
  return (
    <>
      <Header />
      <main className="min-h-screen pb-12 flex flex-col md:flex-row">
        <section className="flex-1">

        </section>
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
