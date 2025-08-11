export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
  login,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
  const isLoggedIn = true; // Replace with actual login state logic
  return isLoggedIn ? (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        <div>{children}</div>
        <div>{users}</div>
        <div>{revenue}</div>
        <div>{notifications}</div>
        <div>{login}</div>
      </div>
    </div>
  ) : (
    login
  );
}
