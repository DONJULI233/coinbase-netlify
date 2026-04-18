import { Outlet } from "react-router-dom";
import NavBar from "../layout/NavBar";
import Footer from "../layout/Footer";
import WarningBanner from "./WarningBanner";
import FooterDisclaimer from "./FooterDisclaimer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">
      {/* Warning Banner at the very top */}
      <WarningBanner />
      {/* Navigation */}
      <NavBar />
      {/* Main Page Content */}
      <main className="flex-1 flex flex-col w-full">
        <Outlet />
      </main>
      {/* Footer */}
      <Footer />
      {/* Footer Disclaimer */}
      <FooterDisclaimer />
    </div>
  );
}