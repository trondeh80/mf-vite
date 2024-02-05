import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import Client1Wrapper from "./pages/Client1Wrapper";
import Client2Wrapper from "./pages/Client2Wrapper";

import "./App.css";
// Lazy load the micro frontends
// const Client1 = lazy(() => import("client1/Client1"));
// const Client2 = lazy(() => import("client2/Client2"));

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/client1", element: <Client1Wrapper /> },
    { path: "/client2", element: <Client2Wrapper /> },
  ]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
