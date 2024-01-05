import { BarChart, Header, Orders, Sidebar, TopCards } from "./components";

function App() {
  return (
    <Sidebar>
      <div className="bg-gray-100 min-h-screen">
        <Header />
        <TopCards />
        <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
          <BarChart />
          <Orders />
        </div>
      </div>
    </Sidebar>
  );
}

export default App;
