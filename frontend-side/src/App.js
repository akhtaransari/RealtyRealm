import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ListingForm from "./components/ListingForm";

function App() {
  return (
    <div class="p-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/listing" element={<ListingForm />} />
      </Routes>
    </div>
  );
}

export default App;
