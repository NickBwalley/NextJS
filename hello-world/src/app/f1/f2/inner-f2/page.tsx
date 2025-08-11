import Link from "next/link";

export default function InnerF2Page() {
  return (
    <div>
      <h1>Inner F2 Page</h1>
      <Link href={"/f5"}>Go to F5 Page</Link>
      <p>This is the content of F5 Page.</p>
    </div>
  );
}
