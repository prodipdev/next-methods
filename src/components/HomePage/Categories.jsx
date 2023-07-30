import getAllCategories from "@/utils/getAllCategories";
import SingleCategory from "./SingleCategory";

const Categories = async () => {
  const categories = await getAllCategories();
  console.log(categories);

  return (
    <div>
      <h1>Categories</h1>
      <div className="container mx-auto grid sm:grid-cols-4 gap-5">
        {categories.map((category) => (
          <SingleCategory key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
