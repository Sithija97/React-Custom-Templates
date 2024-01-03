import { Header } from "./components/header";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <Sidebar>
      <div className="bg-gray-100 min-h-screen">
        <Header />
      </div>
    </Sidebar>
  );
}

export default App;
