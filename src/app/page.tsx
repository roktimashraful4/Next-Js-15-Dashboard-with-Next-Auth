import ApexChartDemo from "@/components/ApexChartDemo";
import DashboardCard from "@/components/DashboardCard";
import TrafficSourcesChart from "@/components/TrafficSourcesChart";
import { dashboardCardsData } from "@/utils/demo-data";

export default function Home() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome to Your Dashboard 👋</h1>
      <p className="text-slate-300 my-2">
        This is your home overview. Here you’ll find quick insights.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {dashboardCardsData.map((s, i) => (
          <DashboardCard
            key={i}
            title={s.title}
            value={s.value}
            trend={s.trend}
            icon={s.icon}
            delay={s.delay}
          />
        ))}
      </div>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="my-6 w-1/2">
          <ApexChartDemo />
        </div>
        <div className="my-6 w-1/2">
          <TrafficSourcesChart />
        </div>
      </div>
    </div>
  );
}
