import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import AuthButtons from "./components/AuthButtons";
import Header from "./components/Header";

function App() {
  return (
    <div className="grid grid-cols-5">
      <Navbar />
      <main className="col-span-4 bg-cyan-50 px-12 py-6">
        <AuthButtons />
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default App;
