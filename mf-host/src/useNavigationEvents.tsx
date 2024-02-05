import { Router } from "@remix-run/router";

export default function useNavigationEvents(router: Router) {
    // @ts-expect-error Customevent is not in the types and I am too lazy to add a CustomEvent type.
    window.addEventListener("navigate", (event: CustomEvent) => {
        const { to } = event?.detail ?? {};
        router.navigate(to);
    });
}