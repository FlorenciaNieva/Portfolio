import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Error from "./pages/Error/index.jsx";
import Home from "./pages/Home/index.jsx";
import AboutMe from "./pages/AboutMe/index.jsx";
import Contact from "./pages/Contact/index.jsx";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}>
        <Header />
        <Routes>
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
