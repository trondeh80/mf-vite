type Props = {
    to: string;
    children: React.ReactNode;
}

export default function Link({ to, children }: Props) {
    return (
        <a href={to} onClick={createNavigationEventFn(to)}>{children}</a>
    );

    function createNavigationEventFn(to: string) {
        return (event: React.MouseEvent<HTMLAnchorElement>) => {
            event.preventDefault();
            const navigationEvent = new CustomEvent("navigate", { detail: { to } });
            window.dispatchEvent(navigationEvent); // Emit our navigation event so the host can handle it.
        };
    }
}