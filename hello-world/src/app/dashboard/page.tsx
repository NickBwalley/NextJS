import Link from "next/link";

export const metadata = {
  title: "Dashboard",
  description: "Overview of the application",
};

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <p>Welcome to the dashboard!</p>
      <Link href="/blog">Blog Page</Link> <br />
      <Link href="/about">About Page</Link>
      <br />
      <Link href="/products">Products Page</Link> <br />
      <Link href="/profile">Profile Page</Link> <br />
      <Link href="/docs">Docs Page</Link> <br />
      <Link href="/counter">Counter Page</Link> <br />
      <Link href="/register">Register Page</Link> <br />
      <Link href="/login">Login Page</Link> <br />
    </>
  );
}
