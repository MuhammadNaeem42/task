import Sidebar from "@/components/ui/Sidebar";

export default function Layout({ children }: any) {
  return (
    <>
      <Sidebar>{children}</Sidebar>
    </>
  );
}
