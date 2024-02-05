import { Suspense, lazy } from "react";

const Client1 = lazy(() => import("client1/Client1"));

export default function Client1Wrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Client1 />
        </Suspense>
    )
}