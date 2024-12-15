import { blogs } from "../constants/db";
import Card from "../components/ui/Card";
const Home = () => {
  return (
    <div className="w-4/5 mx-auto gap-4 grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2">
      {blogs.map((blog, i) => (
        <Card
          key={i}
          title={blog.title}
          description={blog.description}
          date={blog.date}
          tags={blog.tags}
          img={blog.img}
          id={blog.id}
        />
      ))}
    </div>
  );
}

export default Home
