import { Outlet } from "react-router-dom";
import Header from "../wrapper/components/header";

export default function Wrapper() {
  return (
    <div className="app-wrapper">
      <Header />
      <main className="main-content">
        <Outlet />
      </main>
    </div>
  );
}
