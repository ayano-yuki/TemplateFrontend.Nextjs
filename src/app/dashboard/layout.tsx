// /src/app/dashboard/layout.tsx
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="grid grid-cols-4 gap-4">
      <aside className="col-span-1 bg-gray-200 p-4">Sidebar</aside>
      <div className="col-span-3">{children}</div>
    </section>
  );
}
