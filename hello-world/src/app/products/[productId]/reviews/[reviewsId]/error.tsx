"use client";

export default function ErrorPage({ error }: { error: Error }) {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">{error.message}</h1>
        <p className="text-lg">An error occurred while loading the review.</p>
      </div>
    </div>
  );
}
