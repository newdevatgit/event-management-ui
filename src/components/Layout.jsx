// src/Layout.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"; // adjust path if needed

export default function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
