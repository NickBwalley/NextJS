import Link from "next/link";
export default async function ProductDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <>
      <h1>Product Details for {productId}</h1>
      {/* <Link href="/products">Back to Products</Link> */}
    </>
  );
}
