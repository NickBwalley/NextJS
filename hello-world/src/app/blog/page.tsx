import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute: "Blog Page",
  },
};

export default function BlogPage() {
  return (
    <div>
      <h1>Blog Page</h1>
      <p>This is the blog page of our application.</p>
      <Link href="/dashboard">Go to Home</Link>
    </div>
  );
}
