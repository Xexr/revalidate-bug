export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>layout2{children}</div>;
}
