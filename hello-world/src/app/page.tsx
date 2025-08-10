import Link from "next/link";

export const metadata = {
  title: "HomePage",
  description: "Overview of the application",
};

export default function HomePage() {
  return (
    <>
      <h1>HomePage</h1>
      <p>Welcome to the HomePage!</p>
      <Link href="/dashboard">Dashboard</Link> <br />
    </>
  );
}
