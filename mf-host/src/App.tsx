import { RouterProvider, createBrowserRouter } from "react-router-dom";

// SkeBasis from skatteetaten frontend components
import { SkeBasis } from '@skatteetaten/frontend-components/SkeBasis';

// Component native to this "host" microfrontend
import Home from "./Home";

// Micro Frontend Wrapper Components
import Client1Wrapper from "./pages/Client1Wrapper";
import Client2Wrapper from "./pages/Client2Wrapper";

import "./App.css";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/client1", element: <Client1Wrapper /> },
    { path: "/client2", element: <Client2Wrapper /> },
  ]);

  return (
    <>
      <SkeBasis>
        <RouterProvider router={router} />
      </SkeBasis >
    </>
  );
}

export default App;
