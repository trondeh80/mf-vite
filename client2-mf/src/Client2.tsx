import Link from "./Link";

export default function Client2() {
  return (
    <>
      <h2>Client 2</h2>
      <p>Client 2 content</p>
      <Link to="/">Home</Link> | <Link to="/client1">Client 1</Link>
    </>
  );
}
