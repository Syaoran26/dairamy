import Header from '@/components/header';

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col bg-[url('/background.jpg')] bg-cover bg-fixed bg-top-left bg-no-repeat">
      <header className="sticky top-0">
        <Header />
      </header>
      <main className="flex flex-1 flex-col">{children}</main>
    </div>
  );
};
export default MainLayout;
