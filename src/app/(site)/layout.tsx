import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      <main className="flex-1 w-full flex flex-col items-center">
        {children}
      </main>
      <Footer />
    </div>
  );
}
