import { Button } from "@/components/ui/button";
import { posts } from "@/lib/utils";
import { Link, Outlet } from "react-router-dom";

export default function Post() {
  return (
    <div className="flex flex-col gap-10 items-center h-screen">
      <h2 className="text-4xl font-bold">Posts Page</h2>
      <p>This is the Post page. Click on a post to see its details.</p>
      <ul className="mb-4 flex flex-wrap gap-4">
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={post.id.toString()} className="">
              <Button variant="outline" className="focus:bg-slate-400">
                {post.title}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
