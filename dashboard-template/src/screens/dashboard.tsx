import { BarChart, Header, RecentOrders, TopCards } from "../components";

export const Dashboard = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <TopCards />
      <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
        <BarChart />
        <RecentOrders />
      </div>
    </div>
  );
};
