import Link from "next/link";
import { Card } from "@/components/card";
export default function NotificationsPage() {
  return (
    <Card>
      <h1>Notifications Page</h1>
      <p>This is the notifications page of our application.</p>
      <Link href="/complex-dashboard/archived">Archived</Link>
      <Link href="/dashboard">Go to Home</Link>
    </Card>
  );
}
