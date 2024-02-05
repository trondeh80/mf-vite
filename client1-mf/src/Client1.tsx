import Link from "./Link";

export default function Client1() {
  return (
    <>
      <h2>Client 1</h2>
      <p>Client 1 content</p>
      <Link to="/">Home</Link> | <Link to="/client2">Client 2</Link>
    </>
  );
}
