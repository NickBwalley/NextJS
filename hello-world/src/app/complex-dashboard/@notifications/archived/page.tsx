import Link from "next/link";
import { Card } from "@/components/card";
export default function ArchivedNotificationsPage() {
  return (
    <Card>
      <h1>Archived Notifications Page</h1>
      <p>This is the archived notifications page of our application.</p>
      <Link href="/complex-dashboard/">Default Notification</Link>
      <Link href="/dashboard">Go to Home</Link>
    </Card>
  );
}
