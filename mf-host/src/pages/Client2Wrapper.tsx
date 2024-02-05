import { Suspense, lazy } from "react";

const Client2 = lazy(() => import("client2/Client2"));

export default function Client2Wrapper() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Client2 />
        </Suspense>
    )
}