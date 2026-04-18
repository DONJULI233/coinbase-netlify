import "./App.css";
import { Routes, Route } from "react-router-dom";
import AssetDetail from "./pages/AssetDetail.jsx";
import Explore from "./pages/Explore.jsx";
import Home from "./pages/Home.jsx";
import Learn from "./pages/Learn.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import Profile from "./pages/Profile.jsx";
import CryptoList from "./pages/CryptoList.jsx";
import TopGainers from "./pages/TopGainers.jsx";
import NewListings from "./pages/NewListings.jsx";
import AddCrypto from "./pages/AddCrypto.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Layout from "./components/common/Layout.jsx";

function App() {
  return (
    <Routes>
      {/* Routes wrapped in Layout will share the NavBar, Footer, and WarningBanner */}
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/crypto" element={<CryptoList />} />
        <Route path="/crypto/gainers" element={<TopGainers />} />
        <Route path="/crypto/new" element={<NewListings />} />
        <Route path="/asset/:id" element={<AssetDetail />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/crypto/add" element={<ProtectedRoute><AddCrypto /></ProtectedRoute>} />
      </Route>

      {/* Auth pages don't use the full NavBar/Footer layout */}
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
}

export default App;
