import Link from "next/link";

Link;
export default function F2Page() {
  return (
    <div>
      <h1>F2 Page</h1>
      <Link href={"/f4"}>Go to Intercepted F4 Page</Link>
      <p>This is the content of the F2 page in the F1 module.</p>
    </div>
  );
}
