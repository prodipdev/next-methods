import Link from "next/link";

const SingleCategory = ({ category }) => {
  const { id, name } = category;
  return (
    <Link href={`/products?categoryId=${id}`}>
      <h1 className="mt-2 border border-blue-500 px-2 py-1 rounded">{name}</h1>
    </Link>
  );
};

export default SingleCategory;
