import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Nick NextJS App",
    template: "%s | Nick NextJS App",
  },
  description: "A simple Next.js application demonstrating basic features.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            background: "#0070f3",
            color: "#fff",
            padding: "1rem",
            textAlign: "center",
          }}
        >
          <h1>Welcome to Nick NextJS App</h1>
        </header>
        <main>{children}</main>
        <footer
          style={{
            background: "#eee",
            color: "#333",
            padding: "1rem",
            textAlign: "center",
            marginTop: "2rem",
          }}
        >
          <p>
            &copy; {new Date().getFullYear()} Nick NextJS App. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
