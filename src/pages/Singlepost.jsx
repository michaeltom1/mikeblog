import { useParams } from "react-router-dom";
import { blogs } from "../constants/db";
import Tag from "../components/ui/Tag";

function Singlepost() {
  const { id } = useParams();
    const filteredBlogs = blogs.filter((blog) => blog.id.includes(id));

  return (
    <>
      <div className="px-4 grid grid-cols-1 lg:grid-cols-[20%_60%_20%]">
        <div></div>
        <div>
          {filteredBlogs.map((blog) => {
            const tags  = blog.tags;
            return (
              <div key={blog.id} className="space-y-4 cursor-pointer">
                <div className="bg-neutral-300 h-96 overflow-hidden"> 
                  <img
                    src={blog.img}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="font-semibold text-lg text-purple-900">
                  {blog.date}
                </p>
                <h3 className="font-bold text-2xl">{blog.title}</h3>
                <p className="text-gray-500 text-lg">{blog.description}</p>
                <div className="flex gap-2">
                  {tags.map((tag) => (
                    <Tag key={tag.id} tagname={tag.tagName} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </>
  );
}

export default Singlepost;
