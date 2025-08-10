import { Counter } from "./counter";
import Link from "next/link";
export const metadata = {
  title: "Counter Page",
  description: "A simple counter application",
};

export default function CounterPage() {
  return (
    <>
      <Counter />;<Link href="/dashboard">Go to Dashboard</Link>;
    </>
  );
}
