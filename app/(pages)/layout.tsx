import NavBar from '@/app/components/global/navbar';
import Footer from '@/app/components/global/footer';

export default function PageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-screen w-full">
      <div className="min-h-full flex flex-col justify-between">
        <NavBar />
        <div className="mt-24 md:mt-30 lg:mt-36 xl:mt-40 mb-16 lg:mb-20 w-full max-w-6xl mx-auto px-6">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}
