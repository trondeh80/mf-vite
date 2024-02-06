import { BrowserRouter, Route, Routes } from "react-router-dom";

// SkeBasis from skatteetaten frontend components
import { SkeBasis } from '@skatteetaten/frontend-components/SkeBasis';

// Component native to this "host" microfrontend
import Home from "./Home";

// Micro Frontend Wrapper Components - These are the components that lazy load the micro frontends
import Client1Wrapper from "./pages/Client1Wrapper";
import Client2Wrapper from "./pages/Client2Wrapper";

// Navigation Wrapper that only initiates the event listener hook for client navigation
import NavWrapper from "./NavWrapper";

// Irreleveant styling for the app
import "./App.css";


function App() {
  return (
    <SkeBasis>
      <header>
        <h1>Host</h1>
      </header>

      <BrowserRouter>
        <NavWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/client1" element={<Client1Wrapper />} />
            <Route path="/client2" element={<Client2Wrapper />} />
          </Routes>
        </NavWrapper>
      </BrowserRouter>

      <footer>
        <p>Host footer</p>
      </footer>
    </SkeBasis >
  );
}

export default App;
