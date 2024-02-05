import { Suspense, lazy } from "react";

const Client2 = lazy(() => import("client2/Client2"));

// Component that lazy loads the Client2 component runtime from another microfrontend
// Using suspense to show a loading indicator while the component is being loaded
export default function Client2Wrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Client2 />
        </Suspense>
    );
}