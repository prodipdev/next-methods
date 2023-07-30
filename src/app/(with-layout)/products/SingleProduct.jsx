import Link from "next/link";

const SingleProduct = ({ product }) => {
  const { id, title, price } = product;
  return (
    <div>
      <Link href={`/products/${id}`}>
        <button className="border mt-2">{title}</button>
      </Link>
    </div>
  );
};

export default SingleProduct;
