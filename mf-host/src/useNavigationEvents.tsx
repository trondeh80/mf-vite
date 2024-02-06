import { useEffect } from "react";
import { useNavigate } from "react-router";

let hasAddedListener = false; // Would not work for SSR / could use a ref instead, but this is a demo.. so..
export default function useNavigationEvents() {
    const navigate = useNavigate();

    useEffect(() => {
        if (hasAddedListener) return; // forcing the event listener to only be registered once.

        // @ts-expect-error Customevent is not in the types and I am too lazy to add a CustomEvent type.
        window.addEventListener("navigate", (event: CustomEvent) => {
            const { to } = event?.detail ?? {};
            navigate(to);
        });
        hasAddedListener = true; // Flag to prevent adding the event listener more than once.
    });
}