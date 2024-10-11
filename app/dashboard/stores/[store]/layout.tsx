import StoreNavigation from "@/app/ui/stores/StoreNavigation";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-center">
      <div className="min-w-52 w-full md:w-1/5">
        <StoreNavigation />
      </div>
      <div className="w-full md:w-4/5">{children}</div>
    </section>
  );
}
