import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Events from "./components/Events";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Developers from "./pages/Developers";
import Sponsor from "./pages/Sponsor";
import Gallery from "./pages/Gallery";
import ProblemStatement from "./pages/ProblemStatement";

function App() {
  const location = useLocation();

  // Routes where the footer should not appear
  const noFooterRoutes = ["/sponsor", "/events", "/gallery", "/problem-statement", "/developers"];

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Events />
              <Story />
              <Contact />
            </>
          }
        />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/developers" element={<Developers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/problem-statement" element={<ProblemStatement />} />
      </Routes>
      {!noFooterRoutes.includes(location.pathname) && <Footer />}
    </main>
  );
}

function AppWithRouter() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWithRouter;
