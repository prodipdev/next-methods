import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { id, name } = category;
  return (
    <Link href={`/products?categoryId=${id}`}>
      <h1 className="mt-2 underline">{name}</h1>
    </Link>
  );
};

export default SingleCategory;
