import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import AuthButtons from "./components/AuthButtons";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5">
      <Navbar />
      <main className="col-span-1 md:col-span-4 bg-cyan-50 px-2 py-2 md:px-12 md:py-6">
        <AuthButtons />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}

export default App;
