import useNavigationEvents from "./useNavigationEvents";

export default function NavWrapper({ children }: { children: React.ReactNode }) {
    useNavigationEvents();
    return (<>{children}</>);
}