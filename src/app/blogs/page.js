// "use client";
import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";
// import { useRouter } from "next/navigation";

export const metadata = {
  title: "Blogs | Next Hero",
  description: "Next Hero",
};
// const blogs = [
//   {
//     id: 1,
//     year: 2016,
//     title: "title 1",
//   },
//   {
//     id: 2,
//     year: 2017,
//     title: "title 2",
//   },
//   {
//     id: 3,
//     year: 2018,
//     title: "title 3",
//   },
//   {
//     id: 4,
//     year: 2019,
//     title: "title 4",
//   },
//   {
//     id: 5,
//     year: 2023,
//     title: "title 5",
//   },
// ];
const BlogsPage = async () => {
  //   const router = useRouter() ;

  const blogs = await loadBlogsData();

  return (
    <div className="container mx-auto">
      {blogs.map(({ id, title, body }) => (
        <div key={id} className="block border border-blue-500 p-2 my-2">
          <h2 className="text-2xl">
            {id}. {title}
          </h2>
          <p>{body}</p>
          <Link
            href={{
              pathname: `/blogs/${id}`,
              query: { title: title },
            }}

            //   onClick={() => router.push(`/blogs/${year}/${id}?title=${title}`)}
          >
            <button className="bg-blue-500 text-white py-1 px-2 mt-3">
              Details
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogsPage;
