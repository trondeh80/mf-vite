import { Suspense, lazy } from "react";

const Client1 = lazy(() => import("client1/Client1"));

// Component that lazy loads the Client1 component runtime from another microfrontend
// Using suspense to show a loading indicator while the component is being loaded
export default function Client1Wrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Client1 />
        </Suspense>
    );
}