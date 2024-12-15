import Tag from "./Tag";
import { LuArrowUpRight } from "react-icons/lu";
import { Link } from "react-router-dom";
function Card({ img, title, date, description, tags = [], id}) {
  return (
    <div className="space-y-4 cursor-pointer">
      <div className="bg-neutral-300 h-60 overflow-hidden">
        <img src={img} alt="" className="h-full w-full object-cover" />
      </div>
      <p className="font-semibold text-lg text-purple-900">{date}</p>
      <Link to={`/posts/${id}`}>
        <h3 className="font-bold text-2xl flex justify-between">
          {title}
          <span>
            <LuArrowUpRight className="" />
          </span>
        </h3>
      </Link>
      <p className="text-gray-500 text-lg">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <Tag key={tag.id} tagname={tag.tagName} />
        ))}
      </div>
    </div>
  );
}

export default Card;
