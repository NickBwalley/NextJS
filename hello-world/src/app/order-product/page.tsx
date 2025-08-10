"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
  title: "Order Product Page",
  description: "Page to order products",
};

export default function OrderProductPage() {
  const router = useRouter();
  const handleOrder = () => {
    // Logic to handle product ordering
    console.log("Order placed successfully!");
    router.push("/products"); // Redirect to products page after ordering
  };
  return (
    <>
      <h1>Order Product Page</h1>
      <button onClick={handleOrder}>Place Order</button>
      <Link href="/products">View Products</Link>
    </>
  );
}
