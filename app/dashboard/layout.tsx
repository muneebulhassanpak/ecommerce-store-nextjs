import DashboardNavbar from "../ui/dashboard/DashboardNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="max-w-[1200px] mx-auto px-6 md:px-0">
      <DashboardNavbar />
      {children}
    </section>
  );
}
