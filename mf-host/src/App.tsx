import { Suspense, lazy } from "react";

// Lazy load the micro frontends
const Client1 = lazy(() => import("client1/Client1"));
const Client2 = lazy(() => import("client2/Client2"));

import "./App.css";

function App() {
  return (
    <>
      <h1>Host app</h1>
      <Suspense fallback={<p>Laster...</p>}>
        <Client1 />
        <Client2 />
      </Suspense>
    </>
  );
}

export default App;
