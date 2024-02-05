import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <h1>Home!</h1>
            <p>This is the home of the app</p>

            <Link to="/client1">Client 1</Link> | <Link to="/client2">Client 2</Link>
        </>
    );
}