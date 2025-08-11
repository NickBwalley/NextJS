import Link from "next/link";
export const metadata = {
  title: "Products",
  description: "List of products available",
};
function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}
export default function productsPage() {
  const productId = 1; // Example product ID, can be dynamic or fetched from an API

  return (
    <>
      <h1>
        <Link href={`/products/${productId}`}>{productId}</Link>
      </h1>

      <h1>
        <Link href="/products/2">Product 2</Link>
      </h1>
      <h1>
        <Link href="/products/3" replace>
          Product 3
        </Link>
        {/* Using replace to avoid adding this page to the history stack So on click of back
        button then it doesn't come to the products page instead it goes back to the dashboard */}
      </h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </>
  );
}
