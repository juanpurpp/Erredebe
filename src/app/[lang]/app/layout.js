import AppNavBar from "@/components/AppNavBar";
import PrivateProvider from "@/providers/PrivateProvider";
import QueryProvider from "@/providers/QueryProvider";

export default function Page({ children, params }) {
  return (
    <PrivateProvider params={params}>
      <main className="flex h-svh flex-col bg-light_background">
        <AppNavBar lang={params.lang} />
        <QueryProvider>{children}</QueryProvider>
      </main>
    </PrivateProvider>
  );
}