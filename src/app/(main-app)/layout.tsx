import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen min-h-[550px]">
      <NavBar />
      <main className="m-auto max-w-7xl p-4 h-full">{children}</main>
    </div>
  );
}