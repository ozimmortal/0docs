
export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className=" max-w-3xl mx-auto px-4 p-4 selection:bg-white selection:text-black ">
      {children}
    </main>
  );
}