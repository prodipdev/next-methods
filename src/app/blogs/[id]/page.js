// import { useParams, useSearchParams } from "next/navigation";

import loadSingleBlogData from "@/utils/loadSingleBlogData";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSingleBlogData(params.id);
  return {
    title: title,
  };
};

const SingleBlog = async ({ params }) => {
  // const [year, id] = params.segments || [];
  // const params2 = useParams();
  // const searchParams2 = useSearchParams();
  // console.log(params2, searchParams2.get("title"));
  const { id, title, body } = await loadSingleBlogData(params.id);

  return (
    <div>
      <h2 className="text-2xl font-bold">
        {id}. {title}
      </h2>
      <p>{body}</p>
    </div>
  );
};

export default SingleBlog;
