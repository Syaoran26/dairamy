const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex min-h-screen flex-col bg-[url('/background.jpg')] bg-cover bg-center bg-no-repeat">
      <header className="sticky top-0">Header</header>
      <main className="flex-1">{children}</main>
      <footer>Footer</footer>
    </div>
  );
};
export default MainLayout;
