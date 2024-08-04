import AppNavBar from "@/components/AppNavBar";
import PrivateProvider from "@/providers/PrivateProvider";

export default function Page({ children, params }) {
  return (
    <PrivateProvider params={params}>
      <main className="flex h-svh flex-col bg-light_background">
        <AppNavBar lang={params.lang} />
        {children}
      </main>
    </PrivateProvider>
  );
}