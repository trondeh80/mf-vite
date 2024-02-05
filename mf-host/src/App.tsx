import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Hook to handle navigation events from other MF's
import useNavigationEvents from "./useNavigationEvents";

// SkeBasis from skatteetaten frontend components
import { SkeBasis } from '@skatteetaten/frontend-components/SkeBasis';

// Component native to this "host" microfrontend
import Home from "./Home";

// Micro Frontend Wrapper Components
import Client1Wrapper from "./pages/Client1Wrapper";
import Client2Wrapper from "./pages/Client2Wrapper";

import "./App.css";


function App() {

  // Simple router for our whole app.
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/client1", element: <Client1Wrapper /> },
    { path: "/client2", element: <Client2Wrapper /> },
  ]);

  // Listen for custom navigation events using this hook:
  useNavigationEvents(router);

  return (
    <SkeBasis>
      <RouterProvider router={router} />
    </SkeBasis >
  );
}

export default App;
