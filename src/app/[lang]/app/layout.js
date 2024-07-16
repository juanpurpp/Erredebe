import AppNavBar from "@/components/AppNavBar";

export default function Page({children, params}) {
  return (
    <main className="flex h-screen flex-col bg-light_background">
      <AppNavBar lang={params.lang}/>
      {children}
    </main>
  );
}