// /src/app/dashboard/page.tsx
import DashboardCard from './components/DashboardCard';

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Dashboard</h2>
      <DashboardCard />
    </div>
  );
}
