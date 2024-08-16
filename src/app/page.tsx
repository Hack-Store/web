import AppItemCard from "@/components/AppItemCard";
import AppRow from "@/components/AppRow";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <AppRow title="Featured Apps">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <AppItemCard
                key={i}
                src="/vercel.svg"
                name="My Cool App"
                ratings={4.5}
              />
            ))}
        </AppRow>
      </main>
      <Footer />
    </>
  );
}
